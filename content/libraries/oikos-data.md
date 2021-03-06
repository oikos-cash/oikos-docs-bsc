!!! info "Notice"
		Imported from https://github.com/oikos-cash/oikos-data

# oikos-data

[![npm version](https://badge.fury.io/js/oikos-data.svg)](https://badge.fury.io/js/oikos-data)

This is a collection of utilities to query Oikos data from Ethereum. This data has been indexed by The Graph via the various subgraphs the Oikos team maintains ([the subgraph code repo](https://github.com/oikos-cash/oikos-subgraph)).

## Supported queries

The below all return a Promise that resolves with the requested results.

1. `depot.userActions({ user })` Get all depot deposit (`sUSD`) actions for the given user - `deposit`, `withdrawl`, `unaccepted`, `removed`.
2. `depot.clearedDeposits({ fromAddress, toAddress })` Get all cleared synth deposits (payments of `ETH` for `sUSD`) either from a given `fromAddress` or (and as well as) to a given `toAddress`
3. `depot.exchanges({ from })` Get all depot exchanges (buying sUSD with ETH) for a given `from` address.
4. `exchanges.total()` Get the total exchange volume, total fees and total number of unique exchange addresses.
5. `exchanges.rebates({ minTimestamp = 1 day ago })` Get the last `N` exchange rebates since the given `minTimestamp` in seconds. Ordered in reverse chronological order.
6. `exchanges.reclaims({ minTimestamp = 1 day ago })` Get the last `N` exchange reclaims since the given `minTimestamp` in seconds. Ordered in reverse chronological order.
7. `exchanges.since({ minTimestamp = 1 day ago })` Get the last `N` exchanges since the given `minTimestamp` (in seconds, so one hour ago is `Math.round(new Date().getTime()/1000) - 3600`). These are ordered in reverse chronological order.
8. `rate.updates` Get all rate updates for synths in reverse chronological order
9. `synths.issuers` Get all wallets that have invoked `Issue` on `sUSD` (other synths to come)
10. `synths.transfers` Get synth transfers in reverse chronological order
11. `synths.holders` Get all potential synth holders
12. `snx.holders` Get the list of wallets that have ever sent or received `OKS`.
13. `snx.rewards` Get the list of reward escrow holders and their latest balance at vesting entry add or vest.
14. `snx.total` Get the total count of unique `issuers` and `snxHolders`
15. `snx.transfers` Get OKS transfers in reverse chronological order
16. `snx.issued` Get the `Issued` events in reverse chronological order.
17. `snx.burned` Get the `Burned` events in reverse chronological order.
18. `snx.feesClaimed` Get the `FeesClaimed` events in reverse chronological order, showing fees in sUSD and rewards in OKS.
19. `snx.debtSnapshot` Get the historical debt balance for any wallet address.
20. `binaryOptions.markets` Get all the binary options markets created.
21. `binaryOptions.optionTransactions` Get all the Bid and Refund transactions made to the binary options markets.
22. `binaryOptions.historicalOptionPrice` Get historical records of every option price for every market.
23. `etherCollateral.loans` Get the list of all EtherCollateral loans opened.
24. `exchanger.exchangeEntriesSettled({ max, from })` Get the list of all settled exchanges.
25. `exchanges.aggregate({ max, timeSeries })` Get the total amount of exchanges aggregated across various time series.
26. `rate.snxAggregate({ max, timeSeries })` Get the price of oks aggregated across various time series.
27. `snx.aggregateActiveStakers({ max, timeSeries })` Get the number of active stakers across various time series.
28. `snx.totalActiveStakers()` Get the current number of active stakers.
29. `rate.dailyRateChange({ synths })` get the rate change over the past 24 hours for any synth. Can pass in a list to retrieve multiple synths.
30. `snx.accountsRemovedFromLiquidation({ maxTime, minTime, account, max })` finds all the accounts that have fixed their c-ratio to avoid being at risk of liquidation after being flagged.
31. `snx.accountsFlaggedForLiquidation({ minTime, maxTime, account, max })` finds all the accounts that have been flagged for liquidation.
32. `snx.accountsLiquidated({ maxTime, minTime, account, max })` finds all the accounts that have been liquidated after being flagged for liquidation.
33. `snx.getActiveLiquidations({ max, account, minTime, maxTime })` finds all the accounts that have been flagged and are still pending liquidation or in a waiting state. Can also just check for a specific account if desired.

## Supported subscriptions

The below all return an [Observable](https://github.com/tc39/proposal-observable) that when subscribed to with an object.

1. `exchanges.observe()` Get an observable to `subscribe` to that will `next` the latest exchanges in real time (replays the most recent exchange immediately).
1. `rate.observe()` Get an observable to `subscribe` to that will `next` the latest rates in real time (replays the most recent exchange immediately).

## Use this as a node or webpack dependency

```javascript
const snxData = require('oikos-data'); // common js
// or
import snxData from 'oikos-data'; // es modules

// query and log resolved results
snxData.exchanges
	.since({
		minTimestamp: Math.floor(Date.now() / 1e3) - 3600 * 24, // one day ago
	})
	.then((exchanges) => console.log(exchanges));

// subscribe and log streaming results
snxData.exchanges.observe().subscribe({
	next(val) {
		console.log(val);
	},
	error: console.error,
	complete() {
		console.log('done');
	},
});
```

### Use in a browser

```html
<script src="//cdn.jsdelivr.net/npm/oikos-data/browser.js"></script>
<script>
	window.snxData.exchanges
		.since({
			minTimestamp: Math.floor(Date.now() / 1e3) - 3600 * 24, // one day ago
		})
		.then(console.log);

	window.snxData.exchanges.observe().subscribe({ next: console.log });
</script>
```

## How to query via the npm library (CLI)

```bash
# get last 24 hours of exchange activity, ordered from latest to earliest
npx oikos-data exchanges.since

# get exchanges on oikos as they occur in real time (replays the last exchange first)
npx oikos-data exchanges.subscribe
```
