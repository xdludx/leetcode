/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */


// var generateParenthesis = function(n) {
//     if (n === 0) return [];
//     if (n === 1) return ['()'];
//     const preParenthesis = generateParenthesis(n - 1);
//     const ret = new Set();
//     for (let i = 0; i < preParenthesis.length; i++) {
//         const str = preParenthesis[i];
//         for (let j = 0; j < str.length; j++) {
//             ret.add(str.slice(0, j) + '()' + str.slice(j));
//         }
//     }
//     return Array.from(ret);
// };

/**
 * 二叉树遍历
 *
 * @param {*} n
 */
var generateParenthesis = function(n) {
    const result = [];
    dfs(n, n, '', result);
    return result;
}
/**
 *
 * @param {*} left 左括号数量
 * @param {*} right 右括号数量
 * @param {*} str 
 * @param {*} result 结果
 */
function dfs(left, right, str, result) {
    if (left > right) return; // 剩下的左括号数量大于右括号数量直接返回，则不符合条件，直接返回
    if (left === 0 && right === 0) {
        result.push(str);
    } else {
        console.log(left, right, str, result)
        if (left > 0) {
            dfs(left - 1, right, str + '(', result);
        }
        if (right > 0) {
            dfs(left, right - 1, str + ')', result);
        }
    }
}

console.log(generateParenthesis(3));