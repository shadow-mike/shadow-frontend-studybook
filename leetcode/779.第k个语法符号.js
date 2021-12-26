/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  if (n === 1) {
    return k < 0 ? 1 : 0;
  }
  const nums = 2 ** (n - 1);
  const half = nums >>> 1;
  return kthGrammar(
    n - 1,
    // 因为每行都是对称相反
    // 如果k数大于2**(n - 1)的一半，则减去half，并取反值
    Math.abs(k) > half ? -(k > 0 ? 1 : -1) * (Math.abs(k) - half) : k
  );
};
// @lc code=end
