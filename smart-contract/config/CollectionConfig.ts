import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MyVeryCool3DFrogs',
  tokenName: 'Very Cool 3D Frogs',
  tokenSymbol: 'VCF3D',
  hiddenMetadataUri: 'ipfs://QmYfi9rPwQamgh9rmJyKE2uiWPomKf9evVDr3KZJVdsBCB/Hidden.json',
  maxSupply: 10,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.04,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 5,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token-vcf3d',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
