import { conditionToResult } from "."

describe("conditionToResult", () => {
  it("should return a success result if the condition is true", () => {
    const data = "data"
    const expected = {
      isSuccess: true,
      data,
    }
    const result = conditionToResult(true, "error", data)
    expect(result).toEqual(expected)
  })

  it("should return a failure result if the condition is false", () => {
    const error = "error"
    const expected = {
      isSuccess: false,
      error,
    }
    const result = conditionToResult(false, error, "data")
    expect(result).toEqual(expected)
  })
})
