import { inputData } from './median-of-two-sorted-arrays.input.json';
import findMedianSortedArrays from './median-of-two-sorted-arrays';

describe('#findMedianSortedArrays', () => {
  test.each(
    inputData as [nums1: number[], nums2: number[], expected: number][]
  )(`findMedianSortedArrays(%s, %s) :>> %s`, (nums1, nums2, expected) => {
    let result = findMedianSortedArrays(nums1, nums2);

    expect(result).toEqual(expected);
  });
});
