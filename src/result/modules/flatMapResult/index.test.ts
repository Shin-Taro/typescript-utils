import { flatMapResult } from "."
import { Result } from "../../types/Result"

describe("flatMapResult", () => {
  it("should return a success result if the result is a success", () => {
    const result: Result<Error, number> = { isSuccess: true, data: 42 }
    const mappedResult = flatMapResult(
      result,
      (error) => ({ isSuccess: false, error }),
      (data) => ({ isSuccess: true, data: data.toString() }),
    )
    expect(mappedResult).toEqual({ isSuccess: true, data: "42" })
  })

  it("should return a failure result if the result is a failure", () => {
    const result: Result<Error, number> = {
      isSuccess: false,
      error: new Error("Something went wrong"),
    }
    const mappedResult = flatMapResult(
      result,
      () => ({ isSuccess: false, error: new Error("converted error") }),
      (data) => ({ isSuccess: true, data }),
    )
    expect(mappedResult).toEqual({ isSuccess: false, error: new Error("converted error") })
  })
})
