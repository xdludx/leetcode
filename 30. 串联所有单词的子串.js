/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let allSubString = allArrange(words);
    allSubString = allSubString.map((item) => item.join(''));
    const ret = [];
    for (let i = 0; i < s.length; i++) {
        const current = s.slice(i, i + allSubString[0].length);
        if (current.length < allSubString[0].length) break;
        if (allSubString.indexOf(current) > - 1) {
            ret.push(i);
        }
    }
    return ret;
};

function allArrange(arr) {
    if (!arr.length) return [];
    let result = [[]];
    let temp = [];
    const insertElement = (current, item) => {
        const ret = [];
        for (let i = 0; i <= current.length; i++) {
            const newCurrent = current.slice(0);
            newCurrent.splice(i, 0, item);
            ret.push(newCurrent);
        }
        return ret;
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (let j = 0; j < result.length; j++) {
            const retItem = result[j];
            temp = temp.concat(insertElement(retItem, element));
        }
        result = temp;
        temp = [];
    }
    return result;
}

console.log(JSON.stringify(allArrange(['1', '2', '3', '4'])));

console.log(findSubstring("pjzkeocijemcxel", ["dhvf","sind","ffsl","yekr"]));
