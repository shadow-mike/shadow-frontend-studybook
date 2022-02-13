/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let max = Number.MIN_SAFE_INTEGER,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < citations.length; i++) {
    max = Math.max(citations[i], max);
    min = Math.min(citations[i], min); // 缩小存储的数组空间
  }
  if (min > citations.length) return citations.length;
  const count = new Array(max - min + 1).fill(0);
  for (let num of citations) {
    const idx = num - min;
    count[idx] += 1;
  }
  let sum = 0;
  for (let i = count.length - 1; i >= 0; i--) {
      // h肯定不会超过citations长度，所以超过的先累加
    if (i + min > citations.length) {
      sum += count[i];
      continue;
    }
    sum += count[i];
    if (sum >= i + min) {
      return i + min;
    }
  }
  return citations.length;
};
// @lc code=end
