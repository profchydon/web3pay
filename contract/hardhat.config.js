require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/PuJorBOym2hflvKGbdeujyrkr_mqwZsG',
      accounts: ['9dea9b9ee124125af6b079117514b97201d09b17fa2e373cf1b6cb58470aed59']
    }
  }
}