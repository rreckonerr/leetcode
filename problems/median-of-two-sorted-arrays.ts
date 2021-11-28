const joinAndSort = (...arrays: number[][]) =>
  arrays.flat().sort((a, b) => a - b);

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  let joinedLength = nums1.length + nums2.length;
  let medianIndex = Math.ceil((nums1.length + nums2.length) / 2) - 1;

  let joinedArray = joinAndSort(nums1, nums2);

  let median =
    joinedLength % 2
      ? joinedArray[medianIndex]
      : (joinedArray[medianIndex] +
          joinedArray[joinedArray.length - 1 - medianIndex]) /
        2;

  return median;
};

export default findMedianSortedArrays;
