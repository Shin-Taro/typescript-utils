import { Result } from "../../types/Result"

export const performEffectFailure = <E, D>(
  result: Result<E, D>,
  performFailure: (error: E) => void,
): void => {
  if (!result.isSuccess) {
    performFailure(result.error)
  }
}
