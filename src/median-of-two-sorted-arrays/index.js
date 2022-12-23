/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const index = (mergedArray.length - 1) / 2;

  if (mergedArray.length % 2 === 0) {
    const a = mergedArray[index + 0.5];
    const b = mergedArray[index - 0.5];

    return (a + b) / 2;
  } else {
    return mergedArray[index];
  }
};
