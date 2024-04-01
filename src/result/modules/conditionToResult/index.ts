import { Result } from "../../types/Result"
import { createResult } from "../createResult"

export const conditionToResult = <E, D>(condition: boolean, error: E, data: D): Result<E, D> => {
  const { createSuccess, createFailure } = createResult<E, D>()
  return condition ? createSuccess(data) : createFailure(error)
}
