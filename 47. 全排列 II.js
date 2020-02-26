/**
 * https://leetcode-cn.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums.length) return [];
    if (nums.length === 1) return [nums];
    const result = [];
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        
        if (!obj[current]) {
            const left = nums.slice(0, i).concat(nums.slice(i + 1, nums.length))
            const prePermute = permuteUnique(left);
            for (let j = 0; j < prePermute.length; j++) {
                const item = prePermute[j];
                item.unshift(current);
                result.push(item);
            }
        }

        obj[current] = true;
    }
    return result;
};

console.log(JSON.stringify(permuteUnique([1, 2, 1])));