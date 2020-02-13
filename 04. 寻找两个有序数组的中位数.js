// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let sortedArrays = [];
    const allCount = nums1.length + nums2.length;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            sortedArrays = sortedArrays.concat(nums1[i]);
            i++;
        } else {
            sortedArrays = sortedArrays.concat(nums2[j]);
            j++;
        }
    }
    if (i === nums1.length) {
        sortedArrays = sortedArrays.concat(nums2.slice(j));
    }
    if (j === nums2.length) {
        sortedArrays = sortedArrays.concat(nums1.slice(i));
    }
    if (allCount % 2 === 0) {
        const medianIndex = allCount / 2;
        return (sortedArrays[medianIndex] + sortedArrays[medianIndex - 1]) / 2;
    } else {
        const medianIndex = (allCount - 1) / 2;
        return sortedArrays[medianIndex];
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
