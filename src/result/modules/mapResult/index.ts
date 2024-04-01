import { Result } from "../../types/Result"
import { createResult } from "../createResult"

export const mapResult = <E1, D1, E2, D2>(
  result: Result<E1, D1>,
  transformFailure: (error: E1) => E2,
  transformSuccess: (data: D1) => D2,
): Result<E2, D2> => {
  const { createSuccess, createFailure } = createResult<E2, D2>()
  return result.isSuccess
    ? createSuccess(transformSuccess(result.data))
    : createFailure(transformFailure(result.error))
}
