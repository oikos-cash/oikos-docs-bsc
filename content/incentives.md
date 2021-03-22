# Incentives

Here is an overview of the incentives and token flow in the Oikos system. It is built around incentives; users who benefit from a service pay other users who enable that service. This section will explain each category of rewards as well as each acting party within the system.

## Sources of Value

### Exchange Fees

Exchange fees are generated whenever a user exchanges one synthetic asset (Synth) for another through [Oikos.Exchange](https://oikos.exchange). Fees are typically between 10-100 bps (0.1%-1%), though usually 30 bps, and when generated are sent to the fee pool, where it is available to be claimed proportionally by OKS stakers each week.

### OKS Staking Rewards

OKS staking rewards are generated through the inflationary monetary policy implemented in March 2018. At the same time as they claim their exchange fees stakers can claim their staking rewards, which are escrowed for a year. The OKS staking rewards enabled by the inflationary supply are set to decrease gradually until September 2023, where it will become a 2.5% annual terminal inflation rate.

### Liquidity Rewards

5% of the aforementioned inflationary OKS supply is distributed to people providing sBNB/ETH liquidity on Uniswap. This is to ensure there is a clear way for traders to enter the system and start trading for the first time (if they hold ETH).

## Value Recipients

### OKS Stakers

OKS stakers stake their OKS and receive two kinds of rewards: exchange fees and OKS staking rewards. But by staking, they also take on the risk of 'debt.' When someone stakes their OKS, to then immediately unstake it they need to burn as much sUSD as they just minted — this sUSD figure is their debt, and all OKS stakers' debt is pooled together (with each staker holding a proportion of it). But this pooled debt is also where profits and losses from people trading on Oikos.Exchange is represented, so a staker's debt can change over time depending on traders' overall profits and losses. This is the risk they assume when staking their OKS.

### BNB stakers

It is also possible to mint Synths by staking BNB. However, ETH stakers' debt is denominated in ETH rather than sUSD. It does not get added to the system's pooled debt, and thus does not fluctuate depending on traders' outcomes. However, there is a 5% APR to stake ETH, as well as a small minting fee.

### Traders

Traders on Oikos.Exchange can take advantage of the system enabled by OKS stakers, namely trading a wide variety of assets with infinite liquidity and no slippage. They do not need to stake or even hold OKS.

### Liquidity Providers

Liquidity providers are providing depth to the [sBNB/ETH Uniswap liquidity pool](https://etherscan.io/address/0xe9cf7887b93150d4f2da7dfc6d502b216438f244/#tokentxns). The deeper this pool, the less slippage traders pay when entering or exiting the system. Liquidity providers do not need to stake or hold OKS, only ETH and sETH. To receive rewards they must [stake their Uniswap LP tokens](https://blog.oikos.cash/new-uniswap-sbnb-lp-reward-system/) into a purpose-built smart contract.

### Arbitrageurs

The primary opportunity for arbitrage in Oikos is taking advantage of underpriced assets on the secondary market. If sBNB or sUSD are ever trading below the price of ETH or USD respectively, then stakers can profit by purchasing them cheaply and using them within the Synthetix system, where their values do not take the market rate into consideration.

## Additional Crypto-economic Discussions

For more information and discussions on incentives, please see the lateset entries in our blog: [blog.oikos.cash](https://blog.oikos.cash).
