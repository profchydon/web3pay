require('@nomiclabs/hardhat-waffle');

require('dotenv').config();

const key = process.env.key;

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/PuJorBOym2hflvKGbdeujyrkr_mqwZsG',
      accounts: [key]
    }
  }
}