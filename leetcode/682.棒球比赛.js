/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const result = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case '+':
        result.push(result[result.length - 1] + result[result.length - 2]);
        break;
      case 'D':
        result.push(result[result.length - 1] * 2);
        break;
      case 'C':
        result.pop();
        break;
      default:
        result.push(Number(ops[i]));
        break;
    }
  }
  return result.reduce((prev, cur) => prev + cur, 0);
};
// @lc code=end
