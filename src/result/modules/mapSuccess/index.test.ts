import { mapSuccess } from "."
import { Result } from "../../types/Result"

describe("mapSuccess", () => {
  test("should map a success result", () => {
    const result: Result<Error, number> = { isSuccess: true, data: 42 }
    const mappedResult = mapSuccess(result, (data) => data.toString())
    expect(mappedResult).toEqual({ isSuccess: true, data: "42" })
  })

  test("should not map a failure result", () => {
    const result: Result<Error, number> = {
      isSuccess: false,
      error: new Error("Something went wrong"),
    } as Result<Error, number>

    const mappedResult = mapSuccess(result, (data) => data.toString())
    expect(mappedResult).toEqual(result)
  })
})
