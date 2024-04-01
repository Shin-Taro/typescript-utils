import { Result } from "../../types/Result"

export const flatMapFailure = <E1, E2, D>(
  result: Result<E1, D>,
  transformFailure: (error: E1) => Result<E2, D>,
): Result<E2, D> => (result.isSuccess ? result : transformFailure(result.error))
