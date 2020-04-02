/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let index = 0;
    while (index < nums.length) {
        const current = nums[index];
        if (target <= current) break;
        index++
    }
    return index;
};

console.log(searchInsert([1,3,5,6], 2));
