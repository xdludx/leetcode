/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 官方题解：双指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            i--;
        } else {
            continue;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([0,0,0,1,1,1,1,2,2,2,3,3,4]));