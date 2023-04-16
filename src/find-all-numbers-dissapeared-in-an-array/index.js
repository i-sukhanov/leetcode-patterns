/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let i = 0;

  while (i < nums.length) {
    let pos = nums[i] - 1;

    if (nums[i] !== nums[pos]) {
      const swap = [nums[pos], nums[i]];

      nums[i] = swap[0];
      nums[pos] = swap[1];
    } else {
      i += 1;
    }
  }

  miss = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      miss.push(i + 1);
    }
  }

  return miss;
};
