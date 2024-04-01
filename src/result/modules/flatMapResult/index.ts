import { Result } from "../../types/Result"

export const flatMapResult = <E1, D1, E2, D2>(
  result: Result<E1, D1>,
  transformFailure: (error: E1) => Result<E2, D2>,
  transformSuccess: (data: D1) => Result<E2, D2>,
): Result<E2, D2> =>
  result.isSuccess ? transformSuccess(result.data) : transformFailure(result.error)
