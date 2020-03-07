/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let ret = -1;
    if (!needle.length) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let j = 0;
        for (; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === needle.length) {
            ret = i;
            break;
        }
    }
    return ret;
};

console.log(strStr('', ''));