/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ret = strs[0] ? strs[0] : '';
    for (let i = 1; i < strs.length; i++) {
        ret = commonPrefixOfTwoStrs(ret, strs[i]);
    }
    return ret;
};

function commonPrefixOfTwoStrs(str1, str2) {
    let ret = '';
    for (let i = 0; i < str1.length && i < str2.length; i++) {
        if (str1[i] === str2[i]) {
            ret += str1[i];
        } else {
            break;
        }
    }
    return ret;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));