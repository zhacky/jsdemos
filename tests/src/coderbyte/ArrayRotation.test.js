const arrayRotation = require("../../../src/coderbyte/ArrayRotation")

describe("Array Rotation", ()=> {

  it("should return 6321 when given [3,2,1,6]", () => {
    // given
    let arr = [3,2,1,6]
    let expected ="6321"
    // when
    let actual = arrayRotation(arr);
    // then
    expect(actual).toBe(expected)
  })
})
