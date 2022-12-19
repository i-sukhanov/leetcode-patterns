/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const unique = new Set(nums);

  return unique.size !== nums.length;
};

containsDuplicate([1, 2, 3]); // false
containsDuplicate([1, 2, 2, 3]); // true
