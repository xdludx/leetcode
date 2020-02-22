/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s.length) return true;
    const mappings = new Map([
        ['}', '{'],
        [']', '['],
        [')', '('],
    ]);
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (mappings.has(char)) {
            if (stack.length && stack[stack.length - 1] === mappings.get(char)) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

console.log(isValid('([])'));