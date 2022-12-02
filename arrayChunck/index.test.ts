// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

import "jest";
import { chunk } from ".";

describe("Array Chunk", () => {
  it("Should exist chunk function", () => {
    expect(typeof chunk).toBe("function");
  });
  it("chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
  it.only("chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]", () => {
    console.log(chunk([1, 2, 3, 4, 5], 2));
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});
