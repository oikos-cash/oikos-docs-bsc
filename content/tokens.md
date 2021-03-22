
# Tokens

!!! Tip "Decentralizing the remaining price feeds"
		We're in the process of migrating all price feeds to Chainlink's decentralized network.

## Binance Coin (oBNB)

**Address:** [0x4DDaCe4B8d58c3989075d2953FBA81fe69De5389](https://bscscan.com/address/0x4DDaCe4B8d58c3989075d2953FBA81fe69De5389)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Binance Coin (BNB) through price feeds supplied by an oracle.

## Bitcoin (oBTC)

**Address:** [0x19e0E8413DEe3AfFd94bdd42519d01935a0CF0c2](https://bscscan.com/address/0x19e0E8413DEe3AfFd94bdd42519d01935a0CF0c2)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Bitcoin (BTC) through price feeds supplied by an oracle.

## Ether (oBNB)

**Address:** [0xC826A8E4249bC312E21E00e6ae461986cB0D2E78](https://bscscan.com/address/0xC826A8E4249bC312E21E00e6ae461986cB0D2E78)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Ether (BNB) through price feeds supplied by an oracle.

## Gold Ounce (oXAU)

**Address:** [0x68Db964FfF792D1A427f275D228E759d197471B9](https://bscscan.com/address/0x68Db964FfF792D1A427f275D228E759d197471B9)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Gold Ounce (XAU) through price feeds supplied by an oracle.

## Inverted Binance Coin (iBNB)

**Address:** [0x97619B7AB5E5CE6b36203E10b5fc0F34C57b324A](https://bscscan.com/address/0x97619B7AB5E5CE6b36203E10b5fc0F34C57b324A)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [sBNB](#binance-coin-sbnb)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $29 | $44 | $14.50000|

>Inversely tracks the price of Binance Coin (BNB) through price feeds supplied by an oracle. The entry point is $29 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $44 (i.e. when Binance Coin's value reaches $14) or its lower limit of $14.5 (i.e. when Binance Coin’s value reaches $43.5). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iBNB with different limits.

## Inverted Bitcoin (iBTC)

**Address:** [0xB72ef897482B5aCe5815FE0c427720A3BBB0FA59](https://bscscan.com/address/0xB72ef897482B5aCe5815FE0c427720A3BBB0FA59)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [sBTC](#bitcoin-sbtc)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $10,600 | $15,900 | $5,300|

>Inversely tracks the price of Bitcoin (BTC) through price feeds supplied by an oracle. The entry point is $10600 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $15900 (i.e. when Bitcoin's value reaches $5300) or its lower limit of $5300 (i.e. when Bitcoin’s value reaches $15900). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iBTC with different limits.

## Inverted Ether (iBNB)

**Address:** [0x19399869d4582C3B9729fc9B2A3776309d235F13](https://bscscan.com/address/0x19399869d4582C3B9729fc9B2A3776309d235F13)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [sBNB](#ether-sbnb)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $220 | $330 | $110|

>Inversely tracks the price of Ether (BNB) through price feeds supplied by an oracle. The entry point is $220 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $330 (i.e. when Ether's value reaches $110) or its lower limit of $110 (i.e. when Ether’s value reaches $330). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iETH with different limits.

## Oikos (SNX)

**Address:** [0xC32Af9ad3B0E242b97A68485a2D79EEF30584C20](https://bscscan.com/address/0xC32Af9ad3B0E242b97A68485a2D79EEF30584C20)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>The Oikos Network Token (SNX) gets staked as collateral to back Synths and entitles stakers to receive fees generated by Synth trades on Oikos.Exchange.

## US Dollars (oUSD)

**Address:** [0x6BF2Be9468314281cD28A94c35f967caFd388325](https://bscscan.com/address/0x6BF2Be9468314281cD28A94c35f967caFd388325)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of a single US Dollar (USD). This Synth always remains constant at 1.

