import { TransactionRequest } from '@ethersproject/providers'
import { isDefined } from '../utils/lib'

/**
 * A transaction request for a transaction that will trigger some sort of
 * execution on the L2
 */
export interface L1ToL2TransactionRequest {
  /**
   * Core fields needed to form the L1 component of the transaction request
   */
  l1TxFields: Required<Pick<TransactionRequest, 'to' | 'data' | 'value'>> &
    TransactionRequest

  /**
   * If this request were sent now, would it have enough margin to reliably succeed
   */
  isValid(): Promise<boolean>
}

/**
 * Ensure the T is not of TransactionRequest type by ensure it doesnt have a specific TransactionRequest property
 */
type IsNotTransactionRequest<T> = T extends { txRequest: any } ? never : T

/**
 * Check if an object is of L1ToL2TransactionRequest type
 * @param possibleRequest
 * @returns
 */
export const isL1ToL2TransactionRequest = <T>(
  possibleRequest: IsNotTransactionRequest<T> | L1ToL2TransactionRequest
): possibleRequest is L1ToL2TransactionRequest => {
  return (
    isDefined((possibleRequest as L1ToL2TransactionRequest).l1TxFields) &&
    isDefined((possibleRequest as L1ToL2TransactionRequest).isValid)
  )
}