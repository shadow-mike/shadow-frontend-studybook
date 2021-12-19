/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let max = 0;
  const preSum = [0];
  // 大于8记为1，否则记为-1；得到前缀和数组，便于计算原数组的区间和；
  for (let i = 1; i <= hours.length; i++) {
    preSum[i] = preSum[i - 1] + (hours[i - 1] > 8 ? 1 : -1);
  }
  // 此时题目变为在preSum中求解a到b的距离，使得a<b且preSum[b] - preSum[a] > 0;
  const idxStack = [0]; // 维护一个preSum值单调递减的下标栈；因为preSum中每个值之间都是连续性的，所以可以借助单调栈来优化比较效率。
  for (let i = 0; i < preSum.length; i++) {
    if (preSum[i] < preSum[idxStack[idxStack.length - 1]]) idxStack.push(i);
  }
  for (
    let i = preSum.length - 1;
    i > max; // 如果i小于max，就没有再比较的必要，后续结果肯定无法得到大于当前max的值；
    i--
  ) {
    // 当满足右边界preSum值大于栈顶对应preSum值时，（弹出栈顶元素）继续比较以扩大左边界；
    while (preSum[i] > preSum[idxStack[idxStack.length - 1]]) {
      max = Math.max(max, i - idxStack.pop()); // 更新满足题意的最长区间
    }
  }
  return max;
};
// @lc code=end
