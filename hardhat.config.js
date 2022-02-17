const { task } = require('hardhat/config');

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

task("deploy", "Deploy the smart contract", async(taskArgs, hre) => {

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const artwork = await MyNFT.deploy("BitFit Contract", "BITFIT");

  await artwork.deployed();

  await hre.run("verify:verify", {
    address: artwork.address,
    constructorArguments: [
      "BitFit Contract",
      "BITFIT"
    ]
  })


})



//testing on ropsten test network
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

const { ALCHEMY_URL, METAMASK_KEY, POLYGONSCAN_KEY } = process.env;

//switched to matic test network(mumbai)

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "https://matic-testnet-archive-rpc.bwarelabs.com",
      accounts: [
        METAMASK_KEY,
      ]
    }
  },
  etherscan: {
    apiKey:POLYGONSCAN_KEY
  }

};
