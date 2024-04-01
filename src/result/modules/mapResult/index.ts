import { Result } from "../../types/Result"

export const mapResult = <E1, D1, E2, D2>(
  result: Result<E1, D1>,
  transformFailure: (error: E1) => E2,
  transformSuccess: (data: D1) => D2,
): Result<E2, D2> =>
  result.isSuccess
    ? { isSuccess: true, data: transformSuccess(result.data) }
    : { isSuccess: false, error: transformFailure(result.error) }
