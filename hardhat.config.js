const { configDotenv } = require("dotenv");

require("@nomicfoundation/hardhat-toolbox");
// hardhat.config.js
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
 solidity: "0.8.10",
 networks: {
  goerli: {
    url : [process.env.GOERLI_RPC_URL],
    accounts: [process.env.PRIVATE_KEY],
  },
}
};
