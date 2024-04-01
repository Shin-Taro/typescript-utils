import { Result } from "../../types/Result"

export const flatMapSuccess = <E1, D1, D2>(
  result: Result<E1, D1>,
  transformSuccess: (data: D1) => Result<E1, D2>,
): Result<E1, D2> => (result.isSuccess ? transformSuccess(result.data) : result)
