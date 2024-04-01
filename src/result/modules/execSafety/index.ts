import { Result } from "../../types/Result"
import { createResult } from "../createResult"

export const execSafety =
  <Data, Args extends unknown[]>(fn: (...args: Args) => Data) =>
  (...args: Args): Result<Error, Data> => {
    const { createFailure, createSuccess } = createResult<Error, Data>()

    try {
      const data = fn(...args)
      return createSuccess(data)
    } catch (error) {
      if (error instanceof Error) {
        return createFailure(error)
      }
      return createFailure(new Error("Unknown error occurred"))
    }
  }
