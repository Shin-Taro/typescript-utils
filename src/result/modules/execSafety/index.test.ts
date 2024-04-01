import { execSafety } from "."

describe("execSafety", () => {
  test("should return a success result", () => {
    const result = execSafety((num: number) => 42 + num)(10)
    expect(result).toEqual({ isSuccess: true, data: 52 })
  })

  test("should return a failure result", () => {
    const result = execSafety(() => {
      throw new Error("Something went wrong")
    })()
    expect(result).toEqual({ isSuccess: false, error: new Error("Something went wrong") })
  })
})
