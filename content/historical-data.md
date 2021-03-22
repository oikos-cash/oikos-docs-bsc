# Historical Data

??? tip "Tip: The Oikos Dashboard"

    Oikos has a custom dashboard app - https://dashboard.oikos.cash - which shows a number of key metrics within the system. Some of the dashboard is powered by the subgraphs below and some by an internal metrics gathering system (closed source). We are in the process of migrating towards the Graph for our entire dashboard.

There are a number a ways to access Oikos's historical data.

- Query Oikos event log history and calls using The Graph subgraphs
- Fetch state at some block in the past using an Archive Node
- Query event logs directly via the EVM
- Use a third party service like Google BigQuery or DuneAnalytics

### Subgraphs

Oikos currently has four separate subgraphs on The Graph. A subgraph is an entity-based datasource that is populated by Graph indexers - these replay all transactions since the genesis block and use custom mapping code to create entities when events are emitted and functions are invoked.

We've written a custom JavaScript library to abstract away the complexity of dealing with these subgraphs. It's called [oikos-data](libraries/oikos-data.md), and it's an `npm` module to query historical or subscribe to these events in real time.

Alternatively, Each of these subgraphs can be queried using GraphQL - follow the links below to query the subgraphs using GrapHQL in the data explorer UIs provided.

<a href="//thegraph.com/explorer/subgraph/oikos-cash/oikos"><img class="rounded-image" src="/img/misc/subgraph.png" /></a> <a href="//thegraph.com/explorer/subgraph/oikos-cash/oikos-exchanges"><img class="rounded-image" src="/img/misc/subgraph-exchanges.png" /></a> <a href="//thegraph.com/explorer/subgraph/oikos-cash/oikos-rates"><img class="rounded-image" src="/img/misc/subgraph-rates.png" /></a> <a href="//thegraph.com/explorer/subgraph/oikos-cash/oikos-depot"><img class="rounded-image"  src="/img/misc/subgraph-depot.png" /></a>

> The code for these subgraphs is up at: @oikos-cash/oikos-subgraph

### Query event logs directly on the EVM

Instead of using the subgraphs provided, you could directly query the EVM via most free providers (such as Infura or Etherscan).

!!! example "E.g. Get all `FeePool.FeesClaimed` events"

    ```javascript
    import oikos from '@oikos-cash/oikos-bsc';
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

### Using an Archive Node

You can also use an Ethereum node with full historical state (an archive node) to read the blockchain state at some block in the past.

Query using the `{ blockTag: <Number> }` option to get state at a previous block (note the call will fail if the contract was not deployed at the block). Note: usage of this feature of `ethers` and `web3` requires a provider that is a full archive node. [Infura](https://infura.io) and [QuikNode](https://quicknode.io) both provide access to archive nodes for monthly costs. This is supported in [OikosJs](libraries/oikos-js.md) via the underlying `.contract` property in every contract target.

!!! example "E.g. fetch `Oikos.totalIssuedSynths()` from a block in the past"

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

### Third Party Services

There are a number of third parties services that provide queryable datasources for generic smart contract usage:

- [Altheio](https://aleth.io/)
- [Dune Analytics](https://www.duneanalytics.com)
- [Google BigQuery](https://medium.com/google-cloud/live-ethereum-and-bitcoin-data-in-google-bigquery-and-pub-sub-765b71cd57b5)
