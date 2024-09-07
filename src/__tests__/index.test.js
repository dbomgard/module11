const getPercents = require("../index.js")

describe("test getPercents function", () => {
  const num = 340
  const percent = 15
  const str = "^*&#@"
  const bigNum = 9999999999999999999999

  it("15 percents of 340 is equal 51", () => {
    const result = getPercents(percent, num);
    expect(result).toBe(51);
  }),
  it("getting error message with string", () => {
    const result = getPercents(str)
    expect(result).toBe("Неверные данные")
  })
  it("15 percents of 99999999999999999999999 is equal 1.5e+21", () => {
    const result = getPercents(percent, bigNum)
    expect(result).toBe(1.5e+21)
  })
    
});