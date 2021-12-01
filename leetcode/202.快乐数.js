/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (!n) return false;
  let p1 = (p2 = calc(n));
  while (p2 !== 1) {
    p1 = calc(p1);
    p2 = calc(calc(p2));
    if (p2 === p1 && p2 !== 1) return false;
  }
  return p2 === 1;
};

function calc(num) {
  let sum = 0;
  while (num) {
    sum += (num % 10) * (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}
// @lc code=end
