
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

## Ether (oETH)

**Address:** [0xC826A8E4249bC312E21E00e6ae461986cB0D2E78](https://bscscan.com/address/0xC826A8E4249bC312E21E00e6ae461986cB0D2E78)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Ether (ETH) through price feeds supplied by an oracle.

## Gold (oXAU)

**Address:** [0x68Db964FfF792D1A427f275D228E759d197471B9](https://bscscan.com/address/0x68Db964FfF792D1A427f275D228E759d197471B9)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Gold (XAU) through price feeds supplied by an oracle.

## Internet Computer (oICP)

**Address:** [0x7057125189698A37B4bC0968388A83C9C3C785Ad](https://bscscan.com/address/0x7057125189698A37B4bC0968388A83C9C3C785Ad)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Internet Computer (ICP) through price feeds supplied by an oracle.

## Inverse Binance Coin (iBNB)

**Address:** [0x97619B7AB5E5CE6b36203E10b5fc0F34C57b324A](https://bscscan.com/address/0x97619B7AB5E5CE6b36203E10b5fc0F34C57b324A)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [oBNB](#binance-coin-obnb)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $322.89000 | $484.33000 | $215.26000|

>Inversely tracks the price of Inverse Binance Coin (BNB) through price feeds supplied by an oracle. The entry point is $322.89 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $484.33 (i.e. when Inverse Binance Coin's value reaches $161.45) or its lower limit of $215.26 (i.e. when Inverse Binance Coin’s value reaches $430.52). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iBNB with different limits.

## Inverse Bitcoin (iBTC)

**Address:** [0xB72ef897482B5aCe5815FE0c427720A3BBB0FA59](https://bscscan.com/address/0xB72ef897482B5aCe5815FE0c427720A3BBB0FA59)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [oBTC](#bitcoin-obtc)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $34,360.10000 | $51,540.15000 | $22,906.73000|

>Inversely tracks the price of Inverse Bitcoin (BTC) through price feeds supplied by an oracle. The entry point is $34360.1 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $51540.15 (i.e. when Inverse Bitcoin's value reaches $17180.05) or its lower limit of $22906.73 (i.e. when Inverse Bitcoin’s value reaches $45813.47). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iBTC with different limits.

## Inverse Ether (iETH)

**Address:** [0x19399869d4582C3B9729fc9B2A3776309d235F13](https://bscscan.com/address/0x19399869d4582C3B9729fc9B2A3776309d235F13)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [oETH](#ether-oeth)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $2,111.65000 | $3,167.47000 | $1,407.76000|

>Inversely tracks the price of Inverse Ether (ETH) through price feeds supplied by an oracle. The entry point is $2111.65 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $3167.47 (i.e. when Inverse Ether's value reaches $1055.83) or its lower limit of $1407.76 (i.e. when Inverse Ether’s value reaches $2815.54). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iETH with different limits.

## Oikos (OKS)

**Address:** [0xC32Af9ad3B0E242b97A68485a2D79EEF30584C20](https://bscscan.com/address/0xC32Af9ad3B0E242b97A68485a2D79EEF30584C20)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>The Oikos Network Token (OKS) gets staked as collateral to back Synths and entitles stakers to receive fees generated by Synth trades on Oikos.Exchange.

## PancakeSwap (oCAKE)

**Address:** [0x95Ace5A70292A0E3CD528F1B2b77b3051Dd0Df13](https://bscscan.com/address/0x95Ace5A70292A0E3CD528F1B2b77b3051Dd0Df13)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of PancakeSwap (CAKE) through price feeds supplied by an oracle.

## Polkadot (oDOT)

**Address:** [0x71Cb749293c66f6Ac9CB038ceB887b52911B72F2](https://bscscan.com/address/0x71Cb749293c66f6Ac9CB038ceB887b52911B72F2)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Polkadot (DOT) through price feeds supplied by an oracle.

## US Dollars (oUSD)

**Address:** [0x6BF2Be9468314281cD28A94c35f967caFd388325](https://bscscan.com/address/0x6BF2Be9468314281cD28A94c35f967caFd388325)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [0xFafD104549a63278E36EAaf3b199c2915A29CfFA](https://bscscan.com/address/0xFafD104549a63278E36EAaf3b199c2915A29CfFA)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of a single US Dollar (USD). This Synth always remains constant at 1.

