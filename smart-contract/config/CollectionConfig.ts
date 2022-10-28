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
  contractName: 'VeryCoolFrogs',
  tokenName: 'Very Cool Frogs',
  tokenSymbol: 'VCF',
  hiddenMetadataUri: 'ipfs://QmYfi9rPwQamgh9rmJyKE2uiWPomKf9evVDr3KZJVdsBCB/hidden.json',
  maxSupply: 10,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x1028155B192D77246773E59507feD37DB0A16020",
  marketplaceIdentifier: 'my-nft-token-vcf',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
