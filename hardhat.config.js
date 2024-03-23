require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',

  networks: {
    hardhat: {
      gas: "auto", // gas limit
    },
    localhost: {
      gas: "auto", // gas limit
    },
    blast: { // Blast mainnet
      url: 'https://rpc.blast.io/',
      chainId: 81457,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gas: "auto", // gas limit
      gasPrice: 1000000, // 0.001 gwei
    },
    blastSepolia: { // Blast testnet
      url: 'https://sepolia.blast.io/',
      chainId: 168587773,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gas: "auto", // gas limit
      gasPrice: 2000000000, // 1 gwei
    }
  },

  etherscan: {
    apiKey: { // all possible key names here: https://gist.github.com/tempe-techie/95a3ad4e81b46c895928a0524fc2b7ac
      blast: process.env.BLASTSCAN_API_KEY,
      blastSepolia: "randomstring"
    },
    customChains: [
      /* */
      {
        network: "blast",
        chainId: 81457,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/81457/etherscan",
          browserURL: "https://blastexplorer.io"
        }
      },
      

      /* 
      {
        network: "blast",
        chainId: 81457,
        urls: {
          apiURL: "https://api.blastscan.io/api",
          browserURL: "https://blastscan.io"
        }
      },
      */
      {
        network: "blastSepolia",
        chainId: 168587773,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan",
          browserURL: "https://testnet.blastscan.io"
        }
      }
      
    ]
  },

  solidity: {
    compilers: [
      {
        version: "0.5.0",
      },
      {
        version: "0.5.5",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ],
    
  }
  
};