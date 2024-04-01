import { createResult } from "."

describe("createResult", () => {
  test("should create a success result", () => {
    const { createSuccess } = createResult<Error, number>()
    const result = createSuccess(42)
    expect(result).toEqual({ isSuccess: true, data: 42 })
  })

  test("should create a failure result", () => {
    const { createFailure } = createResult<Error, number>()
    const error = new Error("Something went wrong")
    const result = createFailure(error)
    expect(result).toEqual({ isSuccess: false, error})
  })
})
