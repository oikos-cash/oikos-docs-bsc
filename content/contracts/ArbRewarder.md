# ArbRewarder

!!! todo "Work in Progress"

    More work required on this page

## Description

Initial Gitcoin Bounty: https://github.com/oikos-cash/oikos-bsc/issues/188

Announcement Post: https://blog.oikos.cash/our-new-sbnb-snx-arb-contract-is-now-live/

**Source:** [`ArbRewarder.sol`](https://github.com/oikos-cash/oikos-bsc/blob/arb-rewarder/contracts/ArbRewarder.sol)

## Architecture

---

### Inheritance Graph

<centered-image>
    ![ArbRewarder inheritance graph](../img/graphs/ArbRewarder.svg)
</centered-image>

---

### Related Contracts

<centered-image>
    ![ArbRewarder Architecture Graph](../img/graphs/ArbRewarder-architecture.svg)
</centered-image>

??? example "Details"

    * [Uniswap Exchange (sBNB)](https://etherscan.io/address/0xe9Cf7887b93150D4F2Da7dFc6D502B216438F244): This is the market through which the arbitrage is performed.
    * [`ExchangeRates`](ExchangeRates.md): The current OKS/BNB price is retrieved from the exchange rates contract.
    * [`Synth (oBNB)`](Synth.md): One half of the oBNB/BNB pair.
    * [`Oikos (Proxy)`](Synthetix.md): The ArbRewarder rewards the caller with the arb profit as OKS.

---

### Libraries

- [`SafeMath`](SafeMath.md) for `uint`
- [`SafeDecimalMath`](SafeDecimalMath.md) for `uint`

---

## Variables

---

### `off_peg_min`

---

### `acceptable_slippage`

---

### `max_delay`

---

### `divisor`

---

### `sbnb_exchange_addr`

---

### `snx_erc20_addr`

---

### `oikos_rates`

---

### `sbnb_uniswap_exchange`

---

### `sbnb_erc20`

---

### `snx_erc20`

---

## Functions

---

### `constructor`

---

### `setParams`

---

### `setOikos`

---

### `setOikosBNBAddress`

---

### `setExchangeRates`

---

### `recoverBNB`

---

### `recoverERC20`

---

### `addEth`

---

### `isArbable`

---

### `rewardCaller`

---

### `expectedOutput`

---

### `applySlippage`

---

### `maxConvert`

---

### `sqrt`

---

### `min`

---

## Modifiers

### `rateNotStale`
