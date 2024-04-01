import { Failure } from "../../types/Failure"
import { Success } from "../../types/Success"

export const createResult = <Error, Data>() => {
  const createSuccess = (data: Data): Success<Data> => ({
    isSuccess: true,
    data,
  })

  const createFailure = (error: Error): Failure<Error> => ({
    isSuccess: false,
    error,
  })

  return {
    createSuccess,
    createFailure,
  }
}
