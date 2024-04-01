import { execSafety } from "."

describe("execSafety", () => {
  test("should return a success result", () => {
    const result = execSafety(() => 42)
    expect(result).toEqual({ isSuccess: true, data: 42 })
  })

  test("should return a failure result", () => {
    const result = execSafety(() => {
      throw new Error("Something went wrong")
    })
    expect(result).toEqual({ isSuccess: false, error: new Error("Something went wrong") })
  })
})
