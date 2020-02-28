/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     if (height.length < 2) return 0;
//     let maxArea = 0;
//     for (let i = 0; i < height.length - 1; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             const area = (j - i) * Math.min(height[j], height[i]);
//             if (area > maxArea) {
//                 maxArea = area;
//             }
//         }
//     }
//     return maxArea;
// };

/**
 * 双指针法，官方题解
 * @param {*} height 
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));