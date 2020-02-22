/**
 * https://leetcode-cn.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const sortedCandidates = candidates.sort((a, b) => a - b);
    const result = [];
    getCombinationSum(sortedCandidates, target, [], result);
    return result;
};

function getCombinationSum(candidates, target, current, result) {
    if (target < 0) return;
    const temp = current.slice();
    if (target === 0) result.push(temp);
    for (let i = 0; i < candidates.length; i++) {
        const item = candidates[i];
        temp.push(item);
        getCombinationSum(candidates.slice(i), target - item, temp, result);
        temp.pop(item);
    }
}

console.log(JSON.stringify(combinationSum([2,3,6,7], 7)));