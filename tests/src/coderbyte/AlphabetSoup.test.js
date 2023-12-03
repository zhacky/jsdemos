const alphabetSoup = require("../../../src/coderbyte/AlphabetSoup");


  describe("AlphabetSoup Test", ()=> {

    it("should return ehllo when given hello", () => {
      // given
      let str = "hello";
      let expected = "ehllo";
      // when
      let actual = alphabetSoup(str);
      // then
      expect(actual).toBe(expected);
    });
  });

