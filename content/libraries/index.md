# Libraries

!!! Tip "Who this guide is for"

    This is a guide for script writers, dApp developers, analytics platforms and those looking to build software that can interact with Sythetix

### Fetch deployment information

If you're looking to get the addresses and ABIs of any Oikos contract, or maybe the list of synths and their parameters, the best way is to use our [`@oikos/oikos-bsc` `npm` module](oikos.md#usage-and-requirements) (written for nodejs). Instead of looking it up online, the module contains all the details available to fetch locally (we manage this during our deployment processes).

If you'd rather than functionality in the browser, you'll need to use our [`@oikos/oikos-js-bsc` JavaScript library on `npm`](oikos-js.md).

### Read and write state

To interact with Oikos in your dApps and scripts, you have a few options:

1.  Use our [oikos-js](oikos-js.md) library, which is updated each oikos release with the same version number. It uses `ethers.js` under the hood.

2.  Write a custom JS script using our [oikos npm module](oikos.md) to help load the ABIs and addresses as need be.

    ??? example "E.g. fetch `Oikos.totalIssuedSynths()`"

        ```javascript
        // With Ethers
        import ethers from "ethers"; // es modules
        import oikos from "@oikos/oikos-bsc";

        const provider = ethers.getDefaultProvider();

        const network = "mainnet";
        const { abi } = oikos.getSource({
            network,
            contract: "Oikos"
        });
        const { address } = oikos.getTarget({
            network,
            contract: "ProxyOikos"
        });

        // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
        const Oikos = new ethers.Contract(address, abi, provider);

        (async () => {
            const totalIssuedSynths = await Oikos.totalIssuedSynths(
                oikos.toBytes32("oUSD")
            );
            console.log(ethers.utils.formatEther(totalIssuedSynths));
        })();
        ```

3.  Write code to connect to the contracts generically using the addresses and ABIs from the [addresses](../addresses.md) section, downloading the ABIs either directly or via Etherscan's ABI.

### Lookup on-chain historical data

To query data historically, a few options are available:

1.  Use our [oikos-data](oikos-data.md) library, which abstracts away the various subgraphs Oikos uses, exposing query and subscription endpoints for a variety of use-case.

2.  Query our subgraphs directly via our various subgraphs which are listed [here](../historical-data.md#subgraphs).

3.  Query using the `{ blockTag: <Number> }` option to get state at a previous block (note the call will fail if the contract was not deployed at the block). Note: usage of this feature of `ethers` and `web3` requires a provider that is a full archive node. [Infura](https://infura.io) and [QuikNode](https://quicknode.io) both provide access to archive nodes for monthly costs. This is supported in [OikosJs](oikos-js.md) via the underlying `.contract` property in every contract target.

    ??? example "E.g. fetch `Oikos.totalIssuedSynths()` from a block in the past"

        ```javascript
        import ethers from 'ethers';
        import oikos from '@oikos/oikos-bsc';

        // assuming INFURA_PROJECT_ID is from a paid, archive node
        const provider = ethers.providers.InfuraProvider(
          'homestead',
          'Some Infura PROJECT_ID from an archive node'
        );

        const network = 'mainnet';
        const { abi } = oikos.getSource({
          network,
          contract: 'Oikos'
        });
        const { address } = oikos.getTarget({
          network,
          contract: 'ProxyOikos'
        });

        // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
        const Oikos = new ethers.Contract(address, abi, provider);

        (async () => {
          const totalIssuedSynths = await Oikos.totalIssuedSynths(
            oikos.toBytes32('oUSD'),
            {
              blockTag: 9000000
            }
          );
          console.log(ethers.utils.formatEther(totalIssuedSynths));
        })();
        ```

4.  Query for logs using filter topics.

    ??? example "E.g. Get all `FeePool.FeesClaimed` events"

        ```javascript
        import oikos from '@oikos/oikos-bsc';
        const provider = ethers.getDefaultProvider();

        const network = 'mainnet';
        const { abi } = oikos.getSource({
          network,
          contract: 'FeePool'
        });
        const { address } = oikos.getTarget({
          network,
          // Note: for contracts with proxies, events are always emitted on the Proxy,
          // so we need to use this address here
          contract: 'ProxyFeePool'
        });

        const { signature } = abi.find(
          ({ type, name }) => type === 'event' && name === 'FeesClaimed'
        );

        (async () => {
          const feesClaimedEvents = await provider.getLogs({
            topics: [signature],
            address,
            fromBlock: 9000000,
            toBlock: 9015000
          });
          // show last three if any
          console.log(JSON.stringify(feesClaimedEvents.slice(0, 3), null, '\t'));
        })();
        ```
