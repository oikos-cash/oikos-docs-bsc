!!! info "Notice"
Imported from https://github.com/oikos-cash/oikos-bsc-js

# OikosJs library

[![CircleCI](https://circleci.com/gh/oikos-cash/oikos-bsc-js.svg?style=svg)](https://circleci.com/gh/Oikosio/@oikos/oikos-js-bsc) [![npm version](https://badge.fury.io/js/oikos-js.svg)](https://badge.fury.io/js/oikos-js)
[![Discord](https://img.shields.io/discord/413890591840272394.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discordapp.com/channels/413890591840272394/)
[![Twitter Follow](https://img.shields.io/twitter/follow/oikos.cash.svg?label=oikos.cash&style=social)](https://twitter.com/oikos.cash)

The Oikos-JS Library provides a simple pre-packaged API to communicate with [Synthetix](https://oikos.cash) on BNB. You can use it to contribute to DeFi's growing synthetic asset ecosystem.

This is particularly useful for hackathon teams to quickly `npm install @oikos/oikos-js-bsc` and start building in just a few minutes.

Under the hood, OikosJs uses [ethers.js](https://github.com/ethers-io/ethers.js/) library and its concept of [providers](https://docs.ethers.io/ethers.js/html/api-providers.html) and [transaction signers](https://docs.ethers.io/ethers.js/html/api-contract.html#custom-signer).

## Install via npm

`npm install @oikos/oikos-js-bsc`

## Developer Docs

[developer.oikos.cash](https://developer.oikos.cash)

## Example for getting the total oUSD stablecoin in circulation

```javascript
const { OikosJs } = require('@oikos/oikos-js-bsc');
const snxjs = new OikosJs(); //uses default ContractSettings - ethers.js default provider, mainnet
(async function() {
	const totaloUSD = await snxjs.oUSD.totalSupply();
	const totaloUSD = snxjs.utils.formatEther(totaloUSD);
	console.log('oUSDTotalSupply', totaloUSDSupply);
})();
```

Default settings don't use any signer. That means that constants can be viewed from the contract but executing a transaction will fail.
To execute transactions, set up signer.

4 signers are included in the library - Metamask (compatible with Dapp browsers), Trezor, Ledger and PrivateKey.
Custom ethers.js compatible signers can be used too.

## Example using a metamask signer

```javascript
const { OikosJs } = require('@oikos/oikos-js-bsc');
const metaMaskSigner = new OikosJs.signers.Metamask();
const snxjs = new OikosJs({ signer: metaMaskSigner }); //uses Metamask signer and default infura.io provider on mainnet
```

## Example of minting stablecoin(oUSD) with private key signer

```javascript
const { OikosJs } = require('@oikos/oikos-js-bsc');
//parameters: default provider, default networkId, private key as a string
const signer = new OikosJs.signers.PrivateKey(
	null,
	0,
	'0x0123456789012345678901234567890123456789012345678901234567890123',
);
const snxjs = new OikosJs({ signer });

async function run() {
	const totalSupply = await snxjs.Oikos.totalSupply();
	const snxTotalSupply = snxjs.utils.formatEther(totalSupply);
	console.log('snxTotalSupply', snxTotalSupply);

	//issue 100 synths (will throw if insufficient funds for gas)
	try {
		const txObj = await snxjs.Oikos.issueSynths(snxjs.util.parseEther('100')); //execute transaction (requires gas)
		console.log('transaction hash', txObj.hash);
	} catch (e) {
		console.log(e);
	}
}

run();
```

## Live examples

- Get total synth supply [![Get total supply](https://user-images.githubusercontent.com/799038/57645476-572dc780-758c-11e9-98e3-33846fb8c176.png)](https://codepen.io/justinjmoses/pen/vMKywz/left?editors=0010)
- Get collateralized state [![image](https://user-images.githubusercontent.com/799038/57646044-ad4f3a80-758d-11e9-879e-4a507c2cf894.png)
  ](https://codepen.io/justinjmoses/pen/qwqoBR/left?editors=0010)

## Got any questions?

Join our dev community on Discord: [![Discord](https://img.shields.io/discord/413890591840272394.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discordapp.com/channels/413890591840272394/)
