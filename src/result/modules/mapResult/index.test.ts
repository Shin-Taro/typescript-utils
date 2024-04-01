import { mapResult } from "."
import { Result } from "../../types/Result"

describe("mapResult", () => {
  test("should map a success result", () => {
    const result: Result<Error, number> = { isSuccess: true, data: 42 }
    const mappedResult = mapResult(
      result,
      (error) => error,
      (data) => data.toString(),
    )
    expect(mappedResult).toEqual({ isSuccess: true, data: "42" })
  })

  test("should map a failure result", () => {
    const result: Result<Error, number> = {
      isSuccess: false,
      error: new Error("Something went wrong"),
    }

    const expectedError = new Error("converted error")
    const mappedResult = mapResult(
      result,
      () => expectedError,
      (data) => data,
    )
    expect(mappedResult).toEqual({ isSuccess: false, error: expectedError })
  })
})
