/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDuplicates = function (nums) {
  const numSet = new Set();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      result.push(nums[i]);
    } else {
      numSet.add(nums[i]);
    }
  }

  return result;
};
