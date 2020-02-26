/**
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 * case很多，解法效率太低
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let ret = '';
    let flag = false;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (/^\s$/.test(element) && !flag) continue;
        if (/^[\+\-]$/.test(element)) {
            if (!flag && /^\d$/.test(str[i + 1])) {
                ret += element;
                continue;
            } else {
                return ston(ret);
            }
            
        }
        if (/^\d$/.test(element)) {
            ret += element;
            flag = true;
        } else {
            if (flag) {
                return ston(ret);
            }
            return 0;
        }
    }
    return ston(ret);
};

function ston(str) {
    const x = +str;
    if (x < -2147483648) return -2147483648;
    if (x > 2147483647) return 2147483647;
    return x;
}

console.log(myAtoi('   -66985498694685489ssfds'));
