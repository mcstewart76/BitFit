/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");
 const { ALCHEMY_URL, METAMASK_KEY } = process.env;
 module.exports = {
    solidity: "0.8.1",
    defaultNetwork: "ropsten",
    networks: {
       hardhat: {},
       ropsten: {
          url: ALCHEMY_URL,
          accounts: [`0x${METAMASK_KEY}`]
       }
    },
 }
