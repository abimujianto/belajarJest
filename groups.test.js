const { sum, positive, negative } = require("./math-utils");
const { isPalindrome, isAnagram } = require("./string-utils");

describe("testing math utulities", () => {
  let vals;
  let sum_of_vals;
  let pos_vals;
  let neg_vals;

  beforeAll(() => {
    pos_vals = [2, 1, 3];
    neg_vals = [-2, -1, -1];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });

  test("the sum of vals should be 2", () => {
    expect(sum(vals)).toBe(sum_of_vals);
  });

  test("should get positive values", () => {
    expect(positive(vals)).toBe(sum_of_vals);
  });

  test("should get positive values", () => {
    expect(negative(vals)).toBe(pos_vals);
  });

  describe("testing string utulities", () => {
    test.each(["rececar", "radar", "level", "refer", "deified", "civic"])(
      "testing %s for palindrome",
      (word) => {
        expect(isPalindrome(word)).toBeTruthy();
      }
    );
    test.each([
      ["arc", "car"],
      ["cat", "act"],
      ["cider", "cried"],
    ])("testing if %s and %s are anagrams", (word1, word2) => {
      expect(isAnagram(word1, word2)).toBeTruthy();
    });
  });
});
