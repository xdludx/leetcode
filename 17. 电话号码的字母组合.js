/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letterMap = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);
    const letterList = digits.split('');
    let result = [];
    if (!letterList.length) return result;
    for (let i = 0; i < letterList.length; i++) {
        const element = letterList[i];
        const elementLetters = letterMap.get(element);
        if (i === 0) {
            result = elementLetters;
        } else {
            const temp = [];
            for (let j = 0; j < result.length; j++) {
                const currentRet = result[j];
                for (let k = 0; k < elementLetters.length; k++) {
                    const letter = elementLetters[k];
                    temp.push(currentRet + letter);
                }
            }
            result = temp;
        }
    }
    return result;
};

console.log(JSON.stringify(letterCombinations('23456')));