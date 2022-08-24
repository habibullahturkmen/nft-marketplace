require('@nomiclabs/hardhat-waffle');

const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/.env` });
const { PRIVATE_KEY, RPC_URL } = process.env;

const privateKey = PRIVATE_KEY;
const rpcURL = RPC_URL;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: rpcURL,
      accounts: [`0x${privateKey}`],
    },
  },
  solidity: '0.8.4',
};
