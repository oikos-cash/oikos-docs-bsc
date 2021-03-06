'use strict';

const path = require('path');
const fs = require('fs');
const numbro = require('numbro');
const snx = require('@oikos/oikos-bsc');

const network = 'bsc';
const targets = snx.getTarget({ network });
const synths = snx.getSynths({ network });

const doRounding = (entry, limit) => {
	const num = entry * 2 - limit;

	const decimals = (limit.toString().split('.')[1] || '').length;

	return Number(num).toFixed(decimals);
};

const desc = synth => {
	const underlying = synth.desc.replace(/^Inverted /, '');
	const assetSuffix = synth.name !== underlying ? ` (${synth.asset})` : '';
	if (synth.name === 'oUSD') {
		return 'Tracks the price of a single US Dollar (USD). This Synth always remains constant at 1.';
	} else if (synth.inverted) {
		// Note: indexes can be inverted - so we have this check earlier to show inverted info for inverted indexes
		const { entryPoint, upperLimit, lowerLimit } = synth.inverted;
		return (
			`Inversely tracks the price of ${underlying}${assetSuffix} through price feeds supplied by an oracle. ` +
			`The entry point is $${entryPoint} (the approximate market price at time of creation). ` +
			`This Synth freezes when it reaches its upper limit of $${upperLimit} (i.e. when ${underlying}'s ` +
			`value reaches $${doRounding(
				entryPoint,
				upperLimit,
			)}) or its lower limit of $${lowerLimit} (i.e. when ${underlying}’s value ` +
			`reaches $${doRounding(
				entryPoint,
				lowerLimit,
			)}). If it reaches either of its limits and gets frozen, it will no longer be ` +
			'able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen ' +
			`value. At some point after it has reached either of its limits, it will be substituted for another ${synth.name} with different limits.`
		);
	} else if (synth.index) {
		return (
			`Tracks the price of the index: ${underlying}${assetSuffix} through price feeds supplied by an oracle. ` +
			'This index is made up of the following assets and weights: ' +
			synth.index
				.map(({ symbol, name, units }) => `${units} of ${symbol}${name !== symbol ? ` (${name})` : ''}`)
				.join(', ') +
			'.'
		);
	} else {
		return `Tracks the price of ${underlying}${assetSuffix} through price feeds supplied by an oracle.`;
	}
};

console.log('Building tokens.md');

const tokens = [
	{
		symbol: 'OKS',
		name: 'Oikos',
		address: targets.ProxyOikos.address,
		decimals: 18,
		description:
			'The Oikos Network Token (OKS) gets staked as collateral to back Synths and entitles stakers to receive fees generated by Synth trades on Oikos.Exchange.',
	},
].concat(
	synths
		.filter(({ category }) => category !== 'internal')
		.map(synth => ({
			symbol: synth.name,
			asset: synth.asset,
			name: synth.desc,
			address: targets[`Proxy${synth.name}`].address,
			index: synth.index,
			inverted: synth.inverted,
			decimals: 18,
			aggregator: synth.aggregator,
			description: desc(synth),
		}))
		.sort((a, b) => (a.symbol > b.symbol ? 1 : -1)),
);

const format = num =>
	numbro(num).format({
		optionalMantissa: true,
		mantissa: 5,
		thousandSeparated: true,
	});

const getLinkToAsset = ({ name, asset }) =>
	(
		name
			.split(' ')
			.slice(1)
			.join('-') +
		'-o' +
		asset
	).toLowerCase();

const addInverseParameters = ({ inverted, asset, name }) => {
	if (!inverted) return '';

	return (
		`**Inverse of**: [o${asset}](#${getLinkToAsset({ name, asset })})\n\n` +
		'| Entry Point | Upper Limit | Lower Limit |\n' +
		'| - | - | - |\n' +
		`| $${format(inverted.entryPoint)} | $${format(inverted.upperLimit)} | $${format(inverted.lowerLimit)}|\n\n`
	);
};

const addIndexParameters = ({ index, inverted, asset, name }) => {
	if (!index) return '';
	const header = `**Index of**: [s${asset}](#${getLinkToAsset({ name, asset })})\n\n`;
	if (inverted) {
		// don't show index parameters here if also inverted, the link to the long asset will suffice
		return header;
	}
	return (
		header +
		'| Token | Symbol | Units |\n| - | - | - |\n' +
		index.map(({ name, symbol, units }) => `| ${name} | ${symbol} | ${format(units)} |\n`).join('') +
		'\n'
	);
};

const addOracleParameters = ({ asset, aggregator }) => {
	const snxOracle = '0xFafD104549a63278E36EAaf3b199c2915A29CfFA';
	if (!aggregator)
		return (
			`**Price Feed**: Oikos (centralized)\n\n- Oracle: [${snxOracle}](https://bscscan.com/address/${snxOracle})` +
			'\n- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)\n\n'
		);
	return (
		`**Price Feed**: Chainlink (decentralized)\n\n- Oracles: [Network overview](https://landing-feeds.surge.sh/${asset.toLowerCase()}-usd)` +
		`\n- Contract: [Aggregator](https://bscscan.com/address/${aggregator})\n\n`
	);
};

const content = `
# Tokens

!!! Tip "Decentralizing the remaining price feeds"
		We're in the process of migrating all price feeds to Chainlink's decentralized network.

${tokens
	.sort((a, b) => (a.name > b.name ? 1 : -1))
	.map(
		({ name, asset, symbol, address, decimals, description, index, inverted, aggregator }) =>
			`## ${name} (${symbol})\n\n` +
			// Note: Manual addition of SIP-34 check of MKR
			(asset === 'MKR' ? '!!! warning "Suspended"\n\t\tMKR has been suspended.\n\n' : '') +
			`**Address:** [${address}](https://bscscan.com/address/${address})\n\n` +
			`**Decimals:** ${decimals}\n\n` +
			addOracleParameters({ name, asset, aggregator }) +
			addInverseParameters({ name, asset, inverted }) +
			addIndexParameters({ name, asset, index, inverted }) +
			`>${description}`,
	)
	.join('\n\n')}

`;
fs.writeFileSync(path.join(__dirname, '..', 'content', 'tokens.md'), content);
