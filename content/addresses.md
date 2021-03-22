Here is the list of all contracts within the current Oikos system.

**Version**: 0.2.11

**Docs Built**: Oct 26, 1985

!!! info "Naming Conventions"
	Within the developer ecosystem, the names of Oikos contracts are referred to by their `source` Solidity file.If the same source is used for multiple instances of contracts with different constructor arguments - such as `Synth.sol`, `TokenState.sol` and `ProxyERC20.sol` - then the convention is to suffix the name of the differing feature to the end - be it the proxy target e.g. `FeePool` for `ProxyFeePool` or the synth's currencyKey eg: `oBNB` for `SynthoBNB`

!!! tip "Handy Contract Links"
	All of the below contracts can be accessed by our [contract linker](https://github.com/oikos-cash/contract-linker) utility. Simply suffix the contract name to the end of https://contracts.oikos.cash to get a link that will always redirect to the latest version of the contract on Etherscan.

	For example, try https://contracts.oikos.cash/Oikos to get linked to the latest Oikos underlying.

	For testnets, insert the testnet name before the contract, as in https://contracts.oikos.cash/bsctestnet/ArbRewarder

 
## BSC Contracts
<table><tr><th>Name</th><th>Source</th><th>ABI</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/AddressResolver.json">AddressResolver.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x24bc02eB05CcaD6e6a620144f71922EAf9b3b64A">0x24bc02eB05CcaD6e6a620144f71922EAf9b3b64A</a>
                </td>
              </tr>
              <tr>
                <td>ArbRewarder</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ArbRewarder.sol">ArbRewarder.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ArbRewarder.json">ArbRewarder.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x79dcCeC140fF50b86852f3EE92CB8577C5A6B187">0x79dcCeC140fF50b86852f3EE92CB8577C5A6B187</a>
                </td>
              </tr>
              <tr>
                <td>BNBCollateral</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/BNBCollateral.sol">BNBCollateral.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/BNBCollateral.json">BNBCollateral.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xc5A7f060243A2BE4e8f1d78b09731e847F9212B1">0xc5A7f060243A2BE4e8f1d78b09731e847F9212B1</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/DelegateApprovals.json">DelegateApprovals.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xf718ebB2bA2587F8f146c85FF750CaB9238909C6">0xf718ebB2bA2587F8f146c85FF750CaB9238909C6</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Depot.json">Depot.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x32Cd9AaD085b7ae26DD47E34e7EbEeB817dD6cB3">0x32Cd9AaD085b7ae26DD47E34e7EbEeB817dD6cB3</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/EscrowChecker.json">EscrowChecker.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x573EBD9661f33bf44f856DE11F0231DA4C5AeCEE">0x573EBD9661f33bf44f856DE11F0231DA4C5AeCEE</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ExchangeRates.json">ExchangeRates.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x9A1D6d7900eC1E34bF22f85a139a21461D4bFB42">0x9A1D6d7900eC1E34bF22f85a139a21461D4bFB42</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ExchangeState.json">ExchangeState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x78fdE2e2A0fbcB84Fd75a31C640F7aCa5D8F17b0">0x78fdE2e2A0fbcB84Fd75a31C640F7aCa5D8F17b0</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Exchanger.json">Exchanger.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x7dBDD3fa9468c886506fD6726Caa3F2D55074280">0x7dBDD3fa9468c886506fD6726Caa3F2D55074280</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/FeePool.json">FeePool.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x4a7644B4b3ae6E4e2c53D01a39E7C4afA25061aF">0x4a7644B4b3ae6E4e2c53D01a39E7C4afA25061aF</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/FeePoolEternalStorage.json">FeePoolEternalStorage.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xfC3b24375D0a1E59E64612a7a816Ff442e89c4e5">0xfC3b24375D0a1E59E64612a7a816Ff442e89c4e5</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/FeePoolState.json">FeePoolState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xdaF492F4cAdC2Ae2197663CB769329221b47109A">0xdaF492F4cAdC2Ae2197663CB769329221b47109A</a>
                </td>
              </tr>
              <tr>
                <td>IssuanceEternalStorage</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/IssuanceEternalStorage.sol">IssuanceEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/IssuanceEternalStorage.json">IssuanceEternalStorage.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x3c9225fCeF09d63B80B9A0Eb7004804328bD98CC">0x3c9225fCeF09d63B80B9A0Eb7004804328bD98CC</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Issuer.json">Issuer.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xFdF6C2df28c243c99F16d6becAFcd93cFF4A4A9d">0xFdF6C2df28c243c99F16d6becAFcd93cFF4A4A9d</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Math.json">Math.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x250E2f8a80001153c7e62200376C753832A68CBE">0x250E2f8a80001153c7e62200376C753832A68CBE</a>
                </td>
              </tr>
              <tr>
                <td>Oikos</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Oikos.sol">Oikos.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Oikos.json">Oikos.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x14990043249843500A3fc29e39D9E274F8E2c963">0x14990043249843500A3fc29e39D9E274F8E2c963</a>
                </td>
              </tr>
              <tr>
                <td>OikosEscrow</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/OikosEscrow.sol">OikosEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/OikosEscrow.json">OikosEscrow.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xb09280811Fb5b73D9e3e80C6CE37bC81B767013A">0xb09280811Fb5b73D9e3e80C6CE37bC81B767013A</a>
                </td>
              </tr>
              <tr>
                <td>OikosState</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/OikosState.sol">OikosState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/OikosState.json">OikosState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x5065DfD3598D6Dfdc43E6621FAe5ECF78aadbeC1">0x5065DfD3598D6Dfdc43E6621FAe5ECF78aadbeC1</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x18aCf236eB40c0d4824Fb8f2582EBbEcD325Ef6a">0x18aCf236eB40c0d4824Fb8f2582EBbEcD325Ef6a</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x3cFAa9FC30F6277990A96E9d11c1207dbf0d654C">0x3cFAa9FC30F6277990A96E9d11c1207dbf0d654C</a>
                </td>
              </tr>
              <tr>
                <td>ProxyODR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x1bE8d1de0052b7c2f6F9f8F640aAc622518520eE">0x1bE8d1de0052b7c2f6F9f8F640aAc622518520eE</a>
                </td>
              </tr>
              <tr>
                <td>ProxyOikos</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xC32Af9ad3B0E242b97A68485a2D79EEF30584C20">0xC32Af9ad3B0E242b97A68485a2D79EEF30584C20</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x97619B7AB5E5CE6b36203E10b5fc0F34C57b324A">0x97619B7AB5E5CE6b36203E10b5fc0F34C57b324A</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xB72ef897482B5aCe5815FE0c427720A3BBB0FA59">0xB72ef897482B5aCe5815FE0c427720A3BBB0FA59</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x19399869d4582C3B9729fc9B2A3776309d235F13">0x19399869d4582C3B9729fc9B2A3776309d235F13</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x4DDaCe4B8d58c3989075d2953FBA81fe69De5389">0x4DDaCe4B8d58c3989075d2953FBA81fe69De5389</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x19e0E8413DEe3AfFd94bdd42519d01935a0CF0c2">0x19e0E8413DEe3AfFd94bdd42519d01935a0CF0c2</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xC826A8E4249bC312E21E00e6ae461986cB0D2E78">0xC826A8E4249bC312E21E00e6ae461986cB0D2E78</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x6BF2Be9468314281cD28A94c35f967caFd388325">0x6BF2Be9468314281cD28A94c35f967caFd388325</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoXAU</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x68Db964FfF792D1A427f275D228E759d197471B9">0x68Db964FfF792D1A427f275D228E759d197471B9</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/RewardEscrow.json">RewardEscrow.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x769989C007489ADC818C5f9149e5c93b19E412Bb">0x769989C007489ADC818C5f9149e5c93b19E412Bb</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/RewardsDistribution.json">RewardsDistribution.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x8c5B795aC32eb1aa7AE7e1262F88Bdfa971fCb67">0x8c5B795aC32eb1aa7AE7e1262F88Bdfa971fCb67</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/SafeDecimalMath.json">SafeDecimalMath.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xEB7bA0e19ef6dCe1C59C0baA8c68a6168d4949a3">0xEB7bA0e19ef6dCe1C59C0baA8c68a6168d4949a3</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/SupplySchedule.json">SupplySchedule.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xcF3DFFb8127a07BF55B662418aE0bb0a41098C61">0xcF3DFFb8127a07BF55B662418aE0bb0a41098C61</a>
                </td>
              </tr>
              <tr>
                <td>SynthODR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xbe10B2c8c3835d3ec430d0c02549832FD10b0C6D">0xbe10B2c8c3835d3ec430d0c02549832FD10b0C6D</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xf05a8fe859102328620Df506bd90193466749BF1">0xf05a8fe859102328620Df506bd90193466749BF1</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x489DB04c98D087A2e64fe42BFE030F1c5566dDe0">0x489DB04c98D087A2e64fe42BFE030F1c5566dDe0</a>
                </td>
              </tr>
              <tr>
                <td>SynthiETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xe7344d961Cc1eBb02a170A9268733036A77Ffb81">0xe7344d961Cc1eBb02a170A9268733036A77Ffb81</a>
                </td>
              </tr>
              <tr>
                <td>SynthoBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x457d3Bce622e4Af6038ff35c56bBea017250A4DF">0x457d3Bce622e4Af6038ff35c56bBea017250A4DF</a>
                </td>
              </tr>
              <tr>
                <td>SynthoBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x19e3168be614b86804A91bC6dE8B7cD3A7bcC79b">0x19e3168be614b86804A91bC6dE8B7cD3A7bcC79b</a>
                </td>
              </tr>
              <tr>
                <td>SynthoETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x0a26DfC10dAC132307dc84Bd2A86744332e0f63f">0x0a26DfC10dAC132307dc84Bd2A86744332e0f63f</a>
                </td>
              </tr>
              <tr>
                <td>SynthoUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x58B9035e938c5E9aC659f944388cdE3e01D59F0F">0x58B9035e938c5E9aC659f944388cdE3e01D59F0F</a>
                </td>
              </tr>
              <tr>
                <td>SynthoXAU</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x60CE72815353219506A771612F65E4F01d0BA537">0x60CE72815353219506A771612F65E4F01d0BA537</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateODR</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xCf3D8Abe20Af1D0F9F56A0046DF93D08b80e1398">0xCf3D8Abe20Af1D0F9F56A0046DF93D08b80e1398</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateOikos</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x2c09F1a267936F353b6d996f4613f8abd45A4747">0x2c09F1a267936F353b6d996f4613f8abd45A4747</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xe925243492104dFa5f3E1E1c971F7ae2A8179939">0xe925243492104dFa5f3E1E1c971F7ae2A8179939</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xcD6bcc7da89e3ee70F2B2b2a64423591a95f0F4B">0xcD6bcc7da89e3ee70F2B2b2a64423591a95f0F4B</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xe284247c913a7810aC3539C7DFce1dc7Bc750DBB">0xe284247c913a7810aC3539C7DFce1dc7Bc750DBB</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x5bBCB686F88Ce9197DA5D88C265d23Fe843f3A49">0x5bBCB686F88Ce9197DA5D88C265d23Fe843f3A49</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xfb7f15c18AB0b97ce90c78c2DBE28d9d9792050C">0xfb7f15c18AB0b97ce90c78c2DBE28d9d9792050C</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x917633b6543790E6D3B62cF54f037037d430d56D">0x917633b6543790E6D3B62cF54f037037d430d56D</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x69F11ac0E446d14aCC90dF1081513cD5dee01D85">0x69F11ac0E446d14aCC90dF1081513cD5dee01D85</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoXAU</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x303A7d473A9Db24178cfA1eE6EAFbaf40Df3FB96">0x303A7d473A9Db24178cfA1eE6EAFbaf40Df3FB96</a>
                </td>
              </tr></table>