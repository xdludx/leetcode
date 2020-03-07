/**
 * https://leetcode-cn.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const { length } = nums;
    let ret = 1;
    const map = new Map();
    for (let i = 0; i < length; i++) {
        const num = nums[i];
        map.set(num, true);
    }
    for (let j = 1; j < nums.length + 2; j++) {
        if (!map.get(j)) {
            ret = j;
            break;
        }
    }
    return ret;
};

console.log(firstMissingPositive([1]))