import { Result } from "../../types/Result"
import { createResult } from "../createResult"

export const mapSuccess = <E, D1, D2>(
  result: Result<E, D1>,
  fn: (data: D1) => D2,
): Result<E, D2> => {
  const { createSuccess } = createResult<E, D2>()
  return result.isSuccess ? createSuccess(fn(result.data)) : result
}
