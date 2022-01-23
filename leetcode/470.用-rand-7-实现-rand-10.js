/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  let a, b, val;
  while (true) {
    a = rand7();
    b = rand7();
    /**
     * 公式
     * [1, 7]   rand7()
     * [0, 6]   rand7() - 1
     * [0, 42]  (rand7() - 1) * rand7()
     * [1, 49]  (rand7() - 1) * rand7()
     */
    val = (a - 1) * 7 + b; // [1, 49]
    if (val <= 40) return (val % 10) + 1;

    a = val - 40; // [1, 9]
    b = rand7();
    val = (a - 1) * 7 + b; // [1, 63]
    if (val <= 60) return (val % 10) + 1;

    a = val - 60;
    b = rand7();
    val = (a - 1) * 7 + b; // [1, 21]
    if (val <= 20) return (val % 10) + 1;
  }
};
// @lc code=end
