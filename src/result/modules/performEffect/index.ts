import { Result } from "../../types/Result"

export const performEffect = <E, D>(
  result: Result<E, D>,
  performSuccess: (data: D) => void,
  performFailure: (error: E) => void,
): void => {
  if (result.isSuccess) {
    performSuccess(result.data)
    return
  }
  performFailure(result.error)
}
