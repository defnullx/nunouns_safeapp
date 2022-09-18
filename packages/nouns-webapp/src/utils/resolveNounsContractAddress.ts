import config from '../config';

export const resolveNounContractAddress = (address: string) => {
  switch (address.toLowerCase()) {
    case config.addresses.nounsDAOProxy.toLowerCase():
      return 'nuNouns DAO Proxy';
    case config.addresses.nounsAuctionHouseProxy.toLowerCase():
      return 'nuNouns Auction House Proxy';
    case config.addresses.nounsDaoExecutor.toLowerCase():
      return 'nuNouns DAO Treasury';
    default:
      return undefined;
  }
};
