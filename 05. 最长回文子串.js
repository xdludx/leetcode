/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {string} str1
 * @param {string} str2
 * @abstract 解题思路为：1.取反串 2.求公共子串 3.判断是否是回文子串
 * 有更优算法，暂时没看懂
 */

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}

const commonStr = (str1, str2) => {
    const str1Array = str1.split('');
    const str2Array = str2.split('');
    const twoDArray = [];
    let max = 0;
    let index = 0;
    for (let i = 0; i < str1Array.length; i++) {
        twoDArray[i] = [];
        for (let j = 0; j < str2Array.length; j++) {
            if (str1Array[i] === str2Array[j]) {
                if (i > 0 && j > 0 && twoDArray[i - 1][j - 1] > 0) {
                    twoDArray[i][j] = twoDArray[i - 1][j - 1] + 1;
                } else {
                    twoDArray[i][j] = 1;
                }
                if (twoDArray[i][j] > max && isPalindrome(str1Array.slice(i - twoDArray[i][j] + 1, i + 1).join(''))) {
                    max = twoDArray[i][j];
                    index = i;
                }
            } else {
                twoDArray[i][j] = 0;
            }
        }
    }
    return str1Array.slice(index - max + 1, index + 1).join('');
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const reverseS = s.split('').reverse().join('');
    return commonStr(s, reverseS);
};


console.log(longestPalindrome("32101232100123210210123"));