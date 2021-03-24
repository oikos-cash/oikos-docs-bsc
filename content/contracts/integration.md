# Integration Guide

!!! Tip "Who this guide is for"

    This is a guide for smart contract developers looking into integrate one or more of Oikos's contracts into their own contracts.

    If instead you're looking to integrate Oikos into your dApps and scripts, please see our [libraries section](../libraries/index.md).

## Proxies

Oikos makes extensive use of the proxy pattern. This allows users and integrated systems to refer to immutable proxy addresses while the underlying functionality is passed through to the target or _underlying_ contracts which can be updated by an `owner` function. This allows for fast iteration of the Synthetix ecosystem at the cost of trust in the protocol.

!!! Info "Decentralize All the Things"

    In order for Oikos to become a fully decentralized protocol, these upgradable proxy contracts need more oversight and constraint. Please read our blogpost for the path towards full decentralization and how the Proxy architecture is impacted: https://blog.oikos.cash/transition-to-decentralised-governance/ (see *Protocol Changes*)

As of this moment, the following contracts are behind proxies:

- `FeePool` is behind `ProxyFeePool`
- `Oikos` is behind both `ProxySynthetix` (deprecated, see notice below) and `ProxyERC20`
- `SynthoUSD` is behind both `ProxyoUSD` (deprecated) and `ProxyERC20oUSD`
- All remaining synths are also behind a Proxy, all of which are the newer ProxyERC20 pattern. e.g. `ProxysBNB`, `ProxyiBTC`, etc.

