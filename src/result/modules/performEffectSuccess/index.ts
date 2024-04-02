import { Result } from "../../types/Result"

export const performEffectSuccess = <E, D>(
  result: Result<E, D>,
  performSuccess: (data: D) => void,
): void => {
  if (result.isSuccess) {
    performSuccess(result.data)
  }
}
