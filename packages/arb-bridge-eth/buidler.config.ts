import { task, usePlugin } from '@nomiclabs/buidler/config'
import setupDeployTask from './scripts/deployTask'

require('dotenv').config()

usePlugin('@nomiclabs/buidler-waffle')
usePlugin('buidler-typechain')
usePlugin('solidity-coverage')
usePlugin('@nomiclabs/buidler-etherscan')
usePlugin('buidler-spdx-license-identifier')
usePlugin('buidler-gas-reporter')

setupDeployTask()

task('accounts', 'Prints the list of accounts', async (taskArgs, bre) => {
  const accounts = await bre.ethers.getSigners()

  for (const account of accounts) {
    console.log(await account.getAddress())
  }
})

module.exports = {
  defaultNetwork: 'buidlerevm',
  solc: {
    version: '0.5.17',
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  typechain: {
    outDir: 'build/types',
    target: 'ethers-v4',
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 20,
    enabled: process.env.REPORT_GAS ? true : false,
  },
  networks: {
    buidlerevm: {},
    parity: {
      url: 'http://127.0.0.1:7545',
    },
    rinkeby: {
      url: process.env['RINKEBY_URL'],
      accounts: [process.env['RINKEBY_MNEMONIC']],
      network_id: 4,
      confirmations: 1,
    },
    ropsten: {
      url: process.env['ROPSTEN_URL'],
      accounts: [process.env['ROPSTEN_MNEMONIC']],
      network_id: 3,
      confirmations: 1,
    },
    kovan: {
      url: process.env['KOVAN_URL'],
      accounts: [process.env['KOVAN_MNEMONIC']],
      network_id: 42,
      confirmations: 4,
    },
  },
  etherscan: {
    // The url for the Etherscan API you want to use.
    // For example, here we're using the one for the Ropsten test network
    url: 'https://api-kovan.etherscan.io/api',
    apiKey: process.env['ETHERSCAN_API_KEY'],
  },
}
