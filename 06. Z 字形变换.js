/**
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const rowStep = (2 * numRows - 2); // 每行的间隔
    let result = '';
    for (let i = 0; i < numRows; i++) {
        let n = 0;
        // 判断第i行最多显示到的数。
        while (n * rowStep + i < s.length) {
            result += s[n * rowStep + i];
            if (i > 0 && i < numRows - 1) {
                // 判断是否显示索引为 n * rowStep + (rowStep - i)的数
                if (n * rowStep + (rowStep - i) < s.length) {
                    result += s[n * rowStep + (rowStep - i)];
                }
            }
            n++;
        }
    }
    return result;
};

console.log(convert('LEETCODEISHIRING', 3));
// LCIRETOESIIGEDHN
// LCIRETOESIIGEDHN
