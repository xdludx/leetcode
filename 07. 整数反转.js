/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const resAbs = Math.abs(x);
    const resStr = String(resAbs).split('').reverse().join('');
    const result = x > 0 ? +resStr : -resStr;
    if (x < -2147483648 || x > 2147483647 || result < -2147483648 || result > 2147483647) {
        return 0;
    }
    return result;
};

console.log(reverse(1534236469));

// 21