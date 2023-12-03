const bitmapHoles = require("../../../src/coderbyte/BitmapHoles");

describe("Bitmap Holes Test", ()=> {
  it("should return 2 given [10111,10101,11101,11111]", ()=>{
      // given
      let strArr = [10111,10101,11101,11111];
      let expected = 2;      
      // when
      let actual = bitmapHoles(strArr);
      // then
      expect(actual).toBe(expected);
  
    });
});
