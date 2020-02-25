/**
 * https://leetcode-cn.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute1 = (nums) => {
    if (!nums.length) return [];
    let result = [[]];
    let temp = [];
    const insertElement = (current, item) => {
        const ret = [];
        for (let i = 0; i <= current.length; i++) {
            const newCurrent = current.slice(0);
            newCurrent.splice(i, 0, item);
            ret.push(newCurrent);
        }
        return ret;
    }
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        for (let j = 0; j < result.length; j++) {
            const retItem = result[j];
            temp = temp.concat(insertElement(retItem, element));
        }
        result = temp;
        temp = [];
    }
    return result;
};

const permute2 = (nums) => {
    if (!nums.length) return [];
    if (nums.length === 1) return [nums];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const leftNums = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
        const prePermutes = permute2(leftNums);
        for (let j = 0; j < prePermutes.length; j++) {
            const combine = prePermutes[j].concat(element);
            result.push(combine);
        }
    }
    return result;
}

const startTime = Date.now();
console.log(JSON.stringify(permute2([1, 2, 3, 4, 5, 6])));
const endTime = Date.now();
console.log(`${endTime - startTime}ms`);