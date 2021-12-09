/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
/**
 * 思路：找出剩余未排序数组中最大数的下标，然后将其翻转到第一位，再翻转剩余未排序的数组。
 */
var pancakeSort = function (arr) {
  let restAmount = arr.length;
  const result = [];
  while (restAmount) {
    const maxNumIndex = findMaxNumIndex(arr, restAmount);
    if (maxNumIndex === restAmount - 1) {
      restAmount--;
      continue;
    }
    result.push(...logs);
    restAmount--;
  }
  return result;
};

// 找出剩余未排序中最大值的下标
function findMaxNumIndex(arr, length) {
  let maxIdx = 0,
    max = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] > max) {
      maxIdx = i;
      max = arr[i];
    }
  }
  return maxIdx;
}
// 2次翻转
function reverse(arr, maxNumIndex, restAmount) {
  const logs = [];
  if (maxNumIndex > 0) {
    _reverse(arr, maxNumIndex + 1);
    logs.push(maxNumIndex + 1);
  }
  if (restAmount > 1) {
    _reverse(arr, restAmount);
    logs.push(restAmount);
  }

  return logs;
}
function _reverse(arr, l) {
  const copy = arr.slice(0, l).reverse();
  for (let i = 0; i < l; i++) {
    arr[i] = copy[i];
  }
}
// @lc code=end
