/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { ReverterFactory } from '../ReverterFactory'

export class ReverterFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(mode: BigNumberish, overrides?: Overrides): Promise<ReverterFactory> {
    return super.deploy(mode, overrides || {}) as Promise<ReverterFactory>
  }
  getDeployTransaction(
    mode: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(mode, overrides || {})
  }
  attach(address: string): ReverterFactory {
    return super.attach(address) as ReverterFactory
  }
  connect(signer: Signer): ReverterFactory__factory {
    return super.connect(signer) as ReverterFactory__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReverterFactory {
    return new Contract(address, _abi, signerOrProvider) as ReverterFactory
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'mode',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516101de3803806101de8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806040516100519061007f565b80828152602001915050604051809103906000f080158015610077573d6000803e3d6000fd5b50505061008c565b610105806100d983390190565b603f8061009a6000396000f3fe6080604052600080fdfea2646970667358221220c2f17c772b3bb5b254f21698f265d23f6b5dc7835f3fb0f9e46f6f4cbedc8bae64736f6c634300060b00336080604052348015600f57600080fd5b5060405161010538038061010583398181016040526020811015603157600080fd5b81019080805190602001909291905050506000811460b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4d6f6465206e6f7420300000000000000000000000000000000000000000000081525060200191505060405180910390fd5b50603f806100c66000396000f3fe6080604052600080fdfea2646970667358221220dc71a82b6f53bd32cf59c07c78a7372a8614516993748f0ecb2b0456c44ffc6864736f6c634300060b0033'