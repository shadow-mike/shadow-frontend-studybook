/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  // 或者维护一个Heap来返回k个项数组；

  const map = new Map();
  words.forEach((word) => {
    map.set(word, (map.get(word) || 0) + 1);
  });
  const m = Array.from(map);
  m.sort((a, b) =>
    a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
  );
  return m.slice(0, k).map(item => item[0]);
};
// @lc code=end
