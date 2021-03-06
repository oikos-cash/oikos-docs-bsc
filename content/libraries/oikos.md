!!! info "Notice"
Imported from https://github.com/oikos-cash/oikos-bsc

# Oikos

[![npm version](https://badge.fury.io/js/@oikos-cash/oikos-bsc.svg)](https://badge.fury.io/js/@oikos-cash/oikos-bsc)
[![Twitter Follow](https://img.shields.io/twitter/follow/oikos_cash.svg?label=oikos_cash&style=social)](https://twitter.com/oikos_cash)

Oikos is a crypto-backed synthetic asset platform.

It is a multitoken system, powered by OKS, the Oikos Network Token. OKS holders can stake OKS to issue Synths, on-chain synthetic assets via the [Minter Dapp](https://minter.oikos.cash) The network currently supports an ever growing [list of synthetic assets](https://www.oikos.cash/tokens/). Please see the [list of the deployed contracts on MAIN and TESTNETS](https://developer.oikos.cash/api/docs/deployed-contracts.html)
Synths can be traded using (https://oikos.exchange)

Oikos uses a proxy system so that upgrades will not be disruptive to the functionality of the contract. This smooths user interaction, since new functionality will become available without any interruption in their experience. It is also transparent to the community at large, since each upgrade is accompanied by events announcing those upgrades.

Prices are commited on chain by a trusted oracle. Moving to a decentralised oracle is phased in with the first phase completed for all forex prices using Chainlink. (https://landing-feeds.surge.sh).

Please note that this repository is under development.

The code here will be under continual audit and improvement as the project progresses.

## DApps

- https://minter.oikos.cash
- https://oikos.exchange
- https://dashboard.oikos.cash

## Branching

A note on the branches used in this repo.

- `master` represents the contracts live on `mainnet` and all testnets.
- `alpha` is for the newest version of contracts, and is reserved for deploys to `kovan`
- `beta` is for promoted alpha contracts, and is reserved for deploys to `rinkeby`
- `release-candidate` is for promoted beta contracts, and is reserved for deploys to `ropsten`

When a new version of the contracts makes its way through all testnets, it eventually becomes promoted in `master`, with [semver](https://semver.org/) reflecting contract changes in the `major` or `minor` portion of the version (depending on backwards compatibility). `patch` changes are simply for changes to the JavaScript interface.

## Usage and requirements

### As an npm module

```javascript
const snx = require('@oikos/oikos-bsc');

// retrieve an object detailing the contract deployed to the given network.
snx.getTarget({ network: 'rinkeby', contract: 'ProxyOikos' });
/*
{
  name: 'ProxyOikos',
  address: '0x322A3346bf24363f451164d96A5b5cd5A7F4c337',
  source: 'Proxy',
  link: 'https://rinkeby.etherscan.io/address/0x322A3346bf24363f451164d96A5b5cd5A7F4c337',
  timestamp: '2019-03-06T23:05:43.914Z',
  network: 'rinkeby'
}
*/

// retrieve an object detailing the contract ABI and bytecode
snx.getSource({ network: 'rinkeby', contract: 'Proxy' });
/*
{
  bytecode: '0..0',
  abi: [ ... ]
}
*/

// retrieve the array of synths used
snx.getSynths({ network: 'rinkeby' }).map(({ name }) => name);
// ['oUSD', 'sEUR', ...]
```

### As an npm CLI tool

Same as above but as a CLI tool that outputs JSON:

```bash
npx oikos target --network rinkeby --contract ProxyOikos
# {
#   "name": "ProxyOikos",
#   "address": "0x322A3346bf24363f451164d96A5b5cd5A7F4c337",
#   "source": "Proxy",
#   "link": "https://rinkeby.etherscan.io/address/0x322A3346bf24363f451164d96A5b5cd5A7F4c337",
#   "timestamp": "2019-03-06T23:05:43.914Z",
#   "network": "rinkeby"
# }

npx oikos source --network rinkeby --contract Proxy
# {
#   "bytecode": "0..0",
#   "abi": [ ... ]
# }

npx oikos synths --network rinkeby --key name
# ["oUSD", "sEUR", ... ]
```

### For tests (in JavaScript)

Install the dependencies for the project using npm

```
$ npm i
```

To run the tests:

```
$ npm test
```

## System Summary

Traditionally gold was used as a reserve store of value by various governments around the world to prove that there was value to back their currency. The Oikos system replicates this setup, but completely on-chain, and with multiple flavours of stablecoin (Synths), and a store of value backing them up (OKS - Oikos Network Token).

As users exchange synths via `Exchanger.exchange()` or on [oikos.exchange](https://oikos.exchange), small fees are remitted, which get sent to OKS holders that enable the economy to exist.

Users are able to withdraw their fees oUSD. Users are entitled to fees once they've issued synths (to help create the economy generating the fees) and waited for a complete fee period to elapse (currently 7 days). Issuers are incentivised to maintain the ratio of collateral (OKS) to Synths such that the Synths in circulation are generally only worth 20% of the value of the Oikos Network Tokens backing them up via a penalty for being over 20% collateralised. This allows pretty severe price shocks to OKS without threatening the value of the Synths.

Also it's worth noting that there's a decimal library being used for "floating point" math with 10^18 as the base. Also many of the contracts are provided behind a proxy contract for easy upgradability.

---

## Documentation

For the latest system documentaion see

- http://docs.oikos.cash
- https://contracts.oikos.cash
