/**
 * https://leetcode-cn.com/problems/majority-element/
 * 正解应该用摩尔投票法，因为题目假设了“可以假设数组是非空的，并且给定的数组总是存在多数元素。”
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numsMap = new Map();
    let max = 0;
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const count = (numsMap.get(element) || 0) + 1;
        numsMap.set(element, count);
        if (count > max) {
            max = count;
            maxNum = element;
        }
    }
    return maxNum;
};

console.log(majorityElement([3,2,3]));
