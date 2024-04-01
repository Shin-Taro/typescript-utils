import { Result } from "../../types/Result"
import { createResult } from "../createResult"

export const mapFailure = <E1, D, E2>(
  result: Result<E1, D>,
  fn: (error: E1) => E2,
): Result<E2, D> => {
  const { createFailure } = createResult<E2, D>()
  return result.isSuccess ? result : createFailure(fn(result.error))
}
