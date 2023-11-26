const { configDotenv } = require("dotenv");

require("@nomicfoundation/hardhat-toolbox");
// hardhat.config.js
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */


const PRIVATE_KEY = '73839b7947b85348a02e51c9fd8e2f13e0b0ef237555034003b34c5d65f8e214'

module.exports = {
 solidity: "0.8.10",
 networks: {
  goerli: {
    url : 'https://eth-goerli.g.alchemy.com/v2/QBDv73vmYqTJl9rEI-Y5aE99RinVsKJ0',
    accounts: [PRIVATE_KEY],
  },
}
};
