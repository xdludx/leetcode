/**
 * https://leetcode-cn.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
 * @description 因为题目要求改变原数组，所以下面方法不能通过。
 * 涉及二维数组初始化赋值问题
 */
// var rotate = function(matrix) {
//     const { length } = matrix;
//     if (!length) return [];
//     const result = [];
//     for (let n = 0; n < length; n++) {
//         result.push([]);
//     }
//     for (let i = 0; i < length; i++) {
//         const row = matrix[i];
//         for (let j = 0; j < row.length; j++) {
//             const column = row[j];
//             result[j][length - 1 - i] = column;
//         }
//     }
//     return result;
// };

/**
 * 官方题解一
 */
var rotate = function(matrix) {
    const { length } = matrix;
    if (!length) return [];
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            const item = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = item;
        }
    }
    for (let i = 0; i < length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length / 2; j++) {
            const item = matrix[i][j];
            matrix[i][j] = matrix[i][length - j - 1];
            matrix[i][length - j - 1] = item;
        }
    }
    return matrix;
}


console.log(JSON.stringify(rotate([
    [1,2,3],[4,5,6],[7,8,9]
])));