/**
 * https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
    }
    if (sum % 3 !== 0) return false;
    const equalSum = sum / 3;
    let first = 0;
    let B = [];
    for (let i = 0; i < A.length; i++) {
        first += A[i];
        if (first === equalSum) {
            B = A.slice(i + 1);
        }
    }
    let second = 0;
    let C = [];
    for (let i = 0; i < B.length - 1; i++) {
        second += B[i];
        if (second === equalSum) {
            C = B.slice(i + 1);
        }
    }
    let third = 0;
    for (let i = 0; i < C.length; i++) {
        third += C[i];
        if (third === equalSum) {
            return true;
        }
    }
    return false;
};

console.log(canThreePartsEqualSum([14,6,-10,2,18,-7,-4,11]));
