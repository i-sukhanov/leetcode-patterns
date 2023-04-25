/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const intersections = [];
  let i = 0;

  nums.forEach((i) => {
    if (i === k) {
      intersections.push(nums[i]);
    }
  });

  return intersections.length !== 2;
};
