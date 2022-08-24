require('@nomiclabs/hardhat-waffle');

const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/.env` });
const { PRIVATE_KEY, RPC_URL } = process.env;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: '0.8.4',
};
