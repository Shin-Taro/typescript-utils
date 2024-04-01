import { mapFailure } from "."
import { Result } from "../../types/Result"

describe("mapFailure", () => {
  test("should map a failure result", () => {
    const result: Result<Error, never> = {
      isSuccess: false,
      error: new Error("Something went wrong"),
    }
    const mappedResult = mapFailure(result, (error) => error.message)
    expect(mappedResult).toEqual({ isSuccess: false, error: "Something went wrong" })
  })

  test("should not map a success result", () => {
    const result: Result<Error, number> = { isSuccess: true, data: 42 } as Result<Error, number>
    const mappedResult = mapFailure(result, (error) => error.message)
    expect(mappedResult).toEqual(result)
  })
})
