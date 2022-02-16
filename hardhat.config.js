/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config();
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-etherscan");

 task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

//  const { ALCHEMY_URL, METAMASK_KEY } = process.env;
//  module.exports = {
//     solidity: "0.8.1",
//     defaultNetwork: "ropsten",
//     networks: {
//        hardhat: {},
//        ropsten: {
//           url: ALCHEMY_URL,
//           accounts: [`0x${METAMASK_KEY}`]
//        }
//     },
//  }

module.exports = {
  solidity: "0.8.1",
};
