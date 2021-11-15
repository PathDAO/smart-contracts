require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


const { API_URL, PRIVATE_DEV_KEY } = process.env;

module.exports = {
  solidity: {
     version: "0.8.4",
     settings: {
        optimizer: {
           enabled: true,
           runs: 200
        },
     },
   },
  defaultNetwork: "hardhat",
    networks: {
       hardhat: {},
       rinkeby: {
          url: API_URL,
          accounts: [`0x${PRIVATE_DEV_KEY}`]
       },
       mainnet: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
    },
    etherscan: {
       apiKey: process.env.ETHERSCAN_API_KEY
    }
 };
