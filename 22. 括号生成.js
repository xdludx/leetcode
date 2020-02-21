/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * TODO：可以使用深度优先遍历算法，待优化。
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) return [];
    if (n === 1) return ['()'];
    const preParenthesis = generateParenthesis(n - 1);
    const ret = new Set();
    for (let i = 0; i < preParenthesis.length; i++) {
        const str = preParenthesis[i];
        for (let j = 0; j < str.length; j++) {
            ret.add(str.slice(0, j) + '()' + str.slice(j));
        }
    }
    return Array.from(ret);
};

console.log(generateParenthesis(3));