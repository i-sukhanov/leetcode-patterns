/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  maxSum = nums[0];
  currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    currentSum = Math.max(currentSum + num, num);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
