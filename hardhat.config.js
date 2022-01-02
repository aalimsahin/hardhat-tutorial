/**
 * @type import('hardhat/config').HardhatUserConfig
 *
 */
require('@nomiclabs/hardhat-waffle');
const {dotenv} = require("dotenv").config();
// process.env.tokenaddress

module.exports = {
  solidity: "0.8.0",
  networks:{
    rinkeby:{
      url: process.env.INFURA_URL,
      accounts: [`0x${process.env.ACCOUNT_PRIVATE_ADDRESS}`]
    }
  }
};
