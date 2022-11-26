Here is the list of all contracts within the current Oikos system.

**Version**: 0.2.68

**Docs Built**: Nov 25, 2022

!!! info "Naming Conventions"
	Within the developer ecosystem, the names of Oikos contracts are referred to by their `source` Solidity file.If the same source is used for multiple instances of contracts with different constructor arguments - such as `Synth.sol`, `TokenState.sol` and `ProxyERC20.sol` - then the convention is to suffix the name of the differing feature to the end - be it the proxy target e.g. `FeePool` for `ProxyFeePool` or the synth's currencyKey eg: `oBNB` for `SynthoBNB`

 
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
                <td><a target="_blank" href="https://bscscan.com/address/0x7F110C0e1256705cf87E660f2a01889A647189bd">0x7F110C0e1256705cf87E660f2a01889A647189bd</a>
                </td>
              </tr>
              <tr>
                <td>DebtCache</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/DebtCache.sol">DebtCache.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/DebtCache.json">DebtCache.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x1a7a15B6F557CeFc9Bd91cC550479D291cA98235">0x1a7a15B6F557CeFc9Bd91cC550479D291cA98235</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/DelegateApprovals.json">DelegateApprovals.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xD01A5518136Fb2635d13010Eb824EC081Df741bf">0xD01A5518136Fb2635d13010Eb824EC081Df741bf</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/EternalStorage.json">EternalStorage.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x7e598695A0706a7aeC34Bf5a7055F9E6D2B0b1b4">0x7e598695A0706a7aeC34Bf5a7055F9E6D2B0b1b4</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Depot.json">Depot.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x568348f70c3E92c45251F56cF2e857d703Cd958C">0x568348f70c3E92c45251F56cF2e857d703Cd958C</a>
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
                <td>EternalStorageLiquidations</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/EternalStorage.json">EternalStorage.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xf06F60376B7343a7f405EB8D28dFdA7EB0A47497">0xf06F60376B7343a7f405EB8D28dFdA7EB0A47497</a>
                </td>
              </tr>
              <tr>
                <td>EtherCollateraloUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/EtherCollateraloUSD.sol">EtherCollateraloUSD.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/EtherCollateraloUSD.json">EtherCollateraloUSD.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xA90a21824e1848780dbeef70dF8Ddf9E8Ec5fDae">0xA90a21824e1848780dbeef70dF8Ddf9E8Ec5fDae</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ExchangeRates.json">ExchangeRates.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xe1ff83762F2db7274b6AC2c1C9Bb75B2A8574EaF">0xe1ff83762F2db7274b6AC2c1C9Bb75B2A8574EaF</a>
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
                <td><a target="_blank" href="https://bscscan.com/address/0xad17064Ad709f37CB97af2e26E2F9E896a65EBa4">0xad17064Ad709f37CB97af2e26E2F9E896a65EBa4</a>
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
                <td><a target="_blank" href="https://bscscan.com/address/0xe04abC18d6f72d2f4970dB27546960bC2012316B">0xe04abC18d6f72d2f4970dB27546960bC2012316B</a>
                </td>
              </tr>
              <tr>
                <td>Liquidations</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Liquidations.sol">Liquidations.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/Liquidations.json">Liquidations.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xb648DA5cA966046f59729767f7E8E00F21cAe8A0">0xb648DA5cA966046f59729767f7E8E00F21cAe8A0</a>
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
                <td><a target="_blank" href="https://bscscan.com/address/0xFA2dAb0A71dDeA51dfdc22B5A1224a52B8042dBE">0xFA2dAb0A71dDeA51dfdc22B5A1224a52B8042dBE</a>
                </td>
              </tr>
              <tr>
                <td>OikosDebtShare</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/OikosDebtShare.sol">OikosDebtShare.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/OikosDebtShare.json">OikosDebtShare.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x3F22146b52fFe0Aaa0458256850f4f7D7D0226f1">0x3F22146b52fFe0Aaa0458256850f4f7D7D0226f1</a>
                </td>
              </tr>
              <tr>
                <td>OikosEscrow</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/OikosEscrow.sol">OikosEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/OikosEscrow.json">OikosEscrow.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x94b8B68Ad4c673355378A575f203dCFdA21e16E1">0x94b8B68Ad4c673355378A575f203dCFdA21e16E1</a>
                </td>
              </tr>
              <tr>
                <td>OikosEscrowVx</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/OikosEscrowVx.sol">OikosEscrowVx.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/OikosEscrowVx.json">OikosEscrowVx.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x4aD4Ad0ad6955251Bf5DBe397432C211EAA4E7D4">0x4aD4Ad0ad6955251Bf5DBe397432C211EAA4E7D4</a>
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
                <td>ProxyERC20oUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x244dD663b1BBcDE0Ee1D8190bD906E7B77A61EFC">0x244dD663b1BBcDE0Ee1D8190bD906E7B77A61EFC</a>
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
                <td>ProxyoCAKE</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x95Ace5A70292A0E3CD528F1B2b77b3051Dd0Df13">0x95Ace5A70292A0E3CD528F1B2b77b3051Dd0Df13</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoDOT</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x71Cb749293c66f6Ac9CB038ceB887b52911B72F2">0x71Cb749293c66f6Ac9CB038ceB887b52911B72F2</a>
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
                <td>ProxyoICP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x7057125189698A37B4bC0968388A83C9C3C785Ad">0x7057125189698A37B4bC0968388A83C9C3C785Ad</a>
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
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/ReadProxy.json">ReadProxy.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x8Bc175862BB13cAa01eAbE88416Dae769792D3A7">0x8Bc175862BB13cAa01eAbE88416Dae769792D3A7</a>
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
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x6110FAB39E70D19AcC8E66Ab918454d30B130810">0x6110FAB39E70D19AcC8E66Ab918454d30B130810</a>
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
                <td>SynthoCAKE</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x3b823D1d88099a268ec8Ba636b3Fd8db85CAa249">0x3b823D1d88099a268ec8Ba636b3Fd8db85CAa249</a>
                </td>
              </tr>
              <tr>
                <td>SynthoDOT</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xbEE3A7a91cc02ac3519C31a7348e1648E6192F38">0xbEE3A7a91cc02ac3519C31a7348e1648E6192F38</a>
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
                <td>SynthoICP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x93385170983bC4778eb9F8E24dF2423e467dBd41">0x93385170983bC4778eb9F8E24dF2423e467dBd41</a>
                </td>
              </tr>
              <tr>
                <td>SynthoUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x807784f4c7b7B2f49A193ACeB4b2021F96D1F0CB">0x807784f4c7b7B2f49A193ACeB4b2021F96D1F0CB</a>
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
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/SystemStatus.json">SystemStatus.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x3Eb931aAd3bea366d4C1694a98a71FaeF8Bd6D39">0x3Eb931aAd3bea366d4C1694a98a71FaeF8Bd6D39</a>
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
                <td>TokenStateoCAKE</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x7d47CeF8B34569DDdc9E1748D3b822E155Be7286">0x7d47CeF8B34569DDdc9E1748D3b822E155Be7286</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoDOT</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0x9d620bc747E800d106251c2256f01714498A673d">0x9d620bc747E800d106251c2256f01714498A673d</a>
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
                <td>TokenStateoICP</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xB909262d702310Ef3cC602c13200F272D4cAe6F2">0xB909262d702310Ef3cC602c13200F272D4cAe6F2</a>
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
              </tr>
              <tr>
                <td>VBNBCollateraloUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/VBNBCollateraloUSD.sol">VBNBCollateraloUSD.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/bsc/VBNBCollateraloUSD.json">VBNBCollateraloUSD.json</a></td>
                <td><a target="_blank" href="https://bscscan.com/address/0xFcA47F59719e2Fb4d8870E76328eD35A67BC681e">0xFcA47F59719e2Fb4d8870E76328eD35A67BC681e</a>
                </td>
              </tr></table>

## TESTNET Contracts
<table><tr><th>Name</th><th>Source</th><th>ABI</th><th>Address</th></tr>
              <tr>
                <td>AddressResolver</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/AddressResolver.sol">AddressResolver.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/AddressResolver.json">AddressResolver.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x1Ba83008F828fB83D59f24c10472cf2C065a31F1">0x1Ba83008F828fB83D59f24c10472cf2C065a31F1</a>
                </td>
              </tr>
              <tr>
                <td>BNBCollateral</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/BNBCollateral.sol">BNBCollateral.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/BNBCollateral.json">BNBCollateral.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xf294D756CFB33e63137bD215848aDD71AE92Fe14">0xf294D756CFB33e63137bD215848aDD71AE92Fe14</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovals</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/DelegateApprovals.sol">DelegateApprovals.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/DelegateApprovals.json">DelegateApprovals.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x3F4973a31E5e4eFDaBD177488e81A36D2A1dB7f1">0x3F4973a31E5e4eFDaBD177488e81A36D2A1dB7f1</a>
                </td>
              </tr>
              <tr>
                <td>DelegateApprovalsEternalStorage</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/EternalStorage.json">EternalStorage.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x0c450C30d0a75f1e366a57F5C746B382DDA11c8F">0x0c450C30d0a75f1e366a57F5C746B382DDA11c8F</a>
                </td>
              </tr>
              <tr>
                <td>Depot</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Depot.sol">Depot.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Depot.json">Depot.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xe0E30a1b515331d9422F40f28731b016F7E79A17">0xe0E30a1b515331d9422F40f28731b016F7E79A17</a>
                </td>
              </tr>
              <tr>
                <td>EscrowChecker</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/EscrowChecker.sol">EscrowChecker.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/EscrowChecker.json">EscrowChecker.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x082075E4b04Ca0d0aA7B5D24C78e58D70D0850Ea">0x082075E4b04Ca0d0aA7B5D24C78e58D70D0850Ea</a>
                </td>
              </tr>
              <tr>
                <td>EternalStorageLiquidations</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/EternalStorage.sol">EternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/EternalStorage.json">EternalStorage.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x07CB84A02b613cf81eC2A219153666FDaEdF01c4">0x07CB84A02b613cf81eC2A219153666FDaEdF01c4</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeRates</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ExchangeRates.sol">ExchangeRates.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ExchangeRates.json">ExchangeRates.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x095f440706592A2354C844AEED169297b10b2CF9">0x095f440706592A2354C844AEED169297b10b2CF9</a>
                </td>
              </tr>
              <tr>
                <td>ExchangeState</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ExchangeState.sol">ExchangeState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ExchangeState.json">ExchangeState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x4B0AcfF0518042f11aB6C78c6F6DC998a3c7b9eD">0x4B0AcfF0518042f11aB6C78c6F6DC998a3c7b9eD</a>
                </td>
              </tr>
              <tr>
                <td>Exchanger</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Exchanger.sol">Exchanger.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Exchanger.json">Exchanger.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x66fF0696D58AF90f13f382143f8d79A4Fe1Ef0d4">0x66fF0696D58AF90f13f382143f8d79A4Fe1Ef0d4</a>
                </td>
              </tr>
              <tr>
                <td>FeePool</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/FeePool.sol">FeePool.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/FeePool.json">FeePool.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x19ec46DD379f3e4C1Db0aA335C37140124D7c71c">0x19ec46DD379f3e4C1Db0aA335C37140124D7c71c</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolEternalStorage</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/FeePoolEternalStorage.sol">FeePoolEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/FeePoolEternalStorage.json">FeePoolEternalStorage.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x03a3E40a3a7DDa8be05872e3c32c420aF9FE1e65">0x03a3E40a3a7DDa8be05872e3c32c420aF9FE1e65</a>
                </td>
              </tr>
              <tr>
                <td>FeePoolState</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/FeePoolState.sol">FeePoolState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/FeePoolState.json">FeePoolState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x44CEa6Dd85fBf017a325823b3941E1632d0c1742">0x44CEa6Dd85fBf017a325823b3941E1632d0c1742</a>
                </td>
              </tr>
              <tr>
                <td>IssuanceEternalStorage</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/IssuanceEternalStorage.sol">IssuanceEternalStorage.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/IssuanceEternalStorage.json">IssuanceEternalStorage.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x436155b429b86AC1cC25CF6011b2327232912B36">0x436155b429b86AC1cC25CF6011b2327232912B36</a>
                </td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Issuer.sol">Issuer.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Issuer.json">Issuer.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x473Ada686600C57360C5f5A0847616ea66888d2d">0x473Ada686600C57360C5f5A0847616ea66888d2d</a>
                </td>
              </tr>
              <tr>
                <td>Liquidations</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Liquidations.sol">Liquidations.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Liquidations.json">Liquidations.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x806C9E99558368a042Ed254D65149108f33193d7">0x806C9E99558368a042Ed254D65149108f33193d7</a>
                </td>
              </tr>
              <tr>
                <td>Math</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Math.sol">Math.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Math.json">Math.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xE2144C4e067153E93aD9e6901C6C1BDA6A0e7592">0xE2144C4e067153E93aD9e6901C6C1BDA6A0e7592</a>
                </td>
              </tr>
              <tr>
                <td>Oikos</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Oikos.sol">Oikos.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Oikos.json">Oikos.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xeE6c125968B1d53508E574E598974cc53a883a26">0xeE6c125968B1d53508E574E598974cc53a883a26</a>
                </td>
              </tr>
              <tr>
                <td>OikosEscrow</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/OikosEscrow.sol">OikosEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/OikosEscrow.json">OikosEscrow.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x417F66eEd9e29c9CeEd613DED0F93B63F8A4Fb67">0x417F66eEd9e29c9CeEd613DED0F93B63F8A4Fb67</a>
                </td>
              </tr>
              <tr>
                <td>OikosState</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/OikosState.sol">OikosState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/OikosState.json">OikosState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x9233c5f7CD4774C50D4982807Edf96A8da826287">0x9233c5f7CD4774C50D4982807Edf96A8da826287</a>
                </td>
              </tr>
              <tr>
                <td>ProxyERC20</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x556bD413B1146b4dcbf21E2701702bF573854635">0x556bD413B1146b4dcbf21E2701702bF573854635</a>
                </td>
              </tr>
              <tr>
                <td>ProxyFeePool</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x47710eCD9F0B16D913DCf27b62360acD01209cC2">0x47710eCD9F0B16D913DCf27b62360acD01209cC2</a>
                </td>
              </tr>
              <tr>
                <td>ProxyOikos</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Proxy.sol">Proxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Proxy.json">Proxy.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x448A0c2e1887F6872d90562c37dC7426E9E8cF04">0x448A0c2e1887F6872d90562c37dC7426E9E8cF04</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x99D3ADEDEDE199710eFb57480a6142e5999B1D93">0x99D3ADEDEDE199710eFb57480a6142e5999B1D93</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xba8df3eA18876FEBAAEda922aEe046D3194f3841">0xba8df3eA18876FEBAAEda922aEe046D3194f3841</a>
                </td>
              </tr>
              <tr>
                <td>ProxyiETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x02964E32c14e977244cD9929C913Ac81867AdFF6">0x02964E32c14e977244cD9929C913Ac81867AdFF6</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x87c8EdffB0676395199437e58f3c07706F22F3Ba">0x87c8EdffB0676395199437e58f3c07706F22F3Ba</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x3eE0eE0DA741111e6927f603Ccf49d518b6F9Dae">0x3eE0eE0DA741111e6927f603Ccf49d518b6F9Dae</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xAdBEDc4550af5c40B5FC9Cf808027272d36A0A7d">0xAdBEDc4550af5c40B5FC9Cf808027272d36A0A7d</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x2C1375932D63cd38FCd2B638C3345cA56351E4D1">0x2C1375932D63cd38FCd2B638C3345cA56351E4D1</a>
                </td>
              </tr>
              <tr>
                <td>ProxyoXAU</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ProxyERC20.sol">ProxyERC20.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ProxyERC20.json">ProxyERC20.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xFEA9F1960f46867ce54D2C9B68C51ae65c2e5E9E">0xFEA9F1960f46867ce54D2C9B68C51ae65c2e5E9E</a>
                </td>
              </tr>
              <tr>
                <td>ReadProxyAddressResolver</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/ReadProxy.sol">ReadProxy.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/ReadProxy.json">ReadProxy.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x6F06aD50b156a1EB136924A821dA732474d70eB1">0x6F06aD50b156a1EB136924A821dA732474d70eB1</a>
                </td>
              </tr>
              <tr>
                <td>RewardEscrow</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/RewardEscrow.sol">RewardEscrow.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/RewardEscrow.json">RewardEscrow.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xe380728aCff0eA53019C3be38F6942E4b4791E09">0xe380728aCff0eA53019C3be38F6942E4b4791E09</a>
                </td>
              </tr>
              <tr>
                <td>RewardsDistribution</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/RewardsDistribution.sol">RewardsDistribution.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/RewardsDistribution.json">RewardsDistribution.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xcc599Ed8e58e19cc439F6f8Bb04FA2e725B239b8">0xcc599Ed8e58e19cc439F6f8Bb04FA2e725B239b8</a>
                </td>
              </tr>
              <tr>
                <td>SafeDecimalMath</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/SafeDecimalMath.sol">SafeDecimalMath.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/SafeDecimalMath.json">SafeDecimalMath.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x674F2407cE710B93ADE35D7F0c9076d935a4aA5d">0x674F2407cE710B93ADE35D7F0c9076d935a4aA5d</a>
                </td>
              </tr>
              <tr>
                <td>SupplySchedule</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/SupplySchedule.sol">SupplySchedule.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/SupplySchedule.json">SupplySchedule.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xeAd83458CA5F7C9bFb298CCDc2f53099231F2Ba1">0xeAd83458CA5F7C9bFb298CCDc2f53099231F2Ba1</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x9Cc177bD4b94858a1E280072932De0389429Ac4a">0x9Cc177bD4b94858a1E280072932De0389429Ac4a</a>
                </td>
              </tr>
              <tr>
                <td>SynthiBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x3F208AAA2de7EBC9b3Db5326e5eaC772D57408FA">0x3F208AAA2de7EBC9b3Db5326e5eaC772D57408FA</a>
                </td>
              </tr>
              <tr>
                <td>SynthiETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/PurgeableSynth.sol">PurgeableSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/PurgeableSynth.json">PurgeableSynth.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x5b7c7e77B19cf623e264CACC42D87A5D13C1b792">0x5b7c7e77B19cf623e264CACC42D87A5D13C1b792</a>
                </td>
              </tr>
              <tr>
                <td>SynthoBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x3d4d3EDB3BCC28cbd23959A7f417E68B07C9fB13">0x3d4d3EDB3BCC28cbd23959A7f417E68B07C9fB13</a>
                </td>
              </tr>
              <tr>
                <td>SynthoBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x64e9060ca17Ca8B333d9c4529Fb84483A50EF538">0x64e9060ca17Ca8B333d9c4529Fb84483A50EF538</a>
                </td>
              </tr>
              <tr>
                <td>SynthoETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/MultiCollateralSynth.sol">MultiCollateralSynth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/MultiCollateralSynth.json">MultiCollateralSynth.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xa33E5d0A7Ed965faaC6D68cb1751acABafd47e1c">0xa33E5d0A7Ed965faaC6D68cb1751acABafd47e1c</a>
                </td>
              </tr>
              <tr>
                <td>SynthoUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x7BfECB5D5E635b47407C4E9a6Def379fff02A9A5">0x7BfECB5D5E635b47407C4E9a6Def379fff02A9A5</a>
                </td>
              </tr>
              <tr>
                <td>SynthoXAU</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/Synth.sol">Synth.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/Synth.json">Synth.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xB6d698da8c9f630cA6304B061759D27887d6C4Eb">0xB6d698da8c9f630cA6304B061759D27887d6C4Eb</a>
                </td>
              </tr>
              <tr>
                <td>SystemStatus</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/SystemStatus.sol">SystemStatus.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/SystemStatus.json">SystemStatus.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x6Bb0518C3C310a08B7A0c4f10894c28CC8cd4EC8">0x6Bb0518C3C310a08B7A0c4f10894c28CC8cd4EC8</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateOikos</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x341a8467F3bcf5387e80b29da1D668F373cFc5E4">0x341a8467F3bcf5387e80b29da1D668F373cFc5E4</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x7fED47Ff616d0D8E458883D1452F5c492b19A92a">0x7fED47Ff616d0D8E458883D1452F5c492b19A92a</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x454364CdC5E381C1b9e21A0268b809e32420b927">0x454364CdC5E381C1b9e21A0268b809e32420b927</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateiETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x1F016206f93f630CCcED3C92f27A277D99e4E014">0x1F016206f93f630CCcED3C92f27A277D99e4E014</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoBNB</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x3191FeC5e38b3d1535c74ef4D511e74B27B7D1cB">0x3191FeC5e38b3d1535c74ef4D511e74B27B7D1cB</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoBTC</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0xEb13B8Fa64E93FE95587C6Be3d0e1D94Ffa193c5">0xEb13B8Fa64E93FE95587C6Be3d0e1D94Ffa193c5</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoETH</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x923A8a42d5fB33136B8baecC084Cb3C992203928">0x923A8a42d5fB33136B8baecC084Cb3C992203928</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoUSD</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x0bfa8C4D371E584C54FcE4eb94Ab78F371336b49">0x0bfa8C4D371E584C54FcE4eb94Ab78F371336b49</a>
                </td>
              </tr>
              <tr>
                <td>TokenStateoXAU</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos-bsc/blob/master/contracts/TokenState.sol">TokenState.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js-bsc/master/lib/abis/testnet/TokenState.json">TokenState.json</a></td>
                <td><a target="_blank" href="https://testnet.bscscan.com/address/0x6e372d95a25804479699Fe38F288db3995826277">0x6e372d95a25804479699Fe38F288db3995826277</a>
                </td>
              </tr></table>