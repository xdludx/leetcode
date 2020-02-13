/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const ret = target - nums[i];
        if (map.has(ret)) {
            return [map.get(ret), i];
        } else {
            map.set(nums[i], i);
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 26));