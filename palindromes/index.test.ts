import "jest";
import { palindrome } from ".";

describe("Palindromes", () => {
  it("Should exist palindrome function", () => {
    expect(typeof palindrome).toBe("function");
  });
  it("String abba is a palindrome", () => {
    expect(palindrome("abba")).toBe(true);
  });
  it("String 100 is not a palindrome", () => {
    expect(palindrome("100")).toBe(false);
  });
});
