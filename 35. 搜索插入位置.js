/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// const searchInsert = function(nums, target) {
//     let index = 0;
//     while (index < nums.length) {
//         const current = nums[index];
//         if (target <= current) break;
//         index++
//     }
//     return index;
// };

const searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return left;
};

console.log(searchInsert([1,3,5,6], 2));
