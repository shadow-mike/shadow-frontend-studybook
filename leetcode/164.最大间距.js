/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

const getHigh16 = (a) => (a & 0xffff0000) >>> 16;
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;
  const cnt = new Array(2 ** 16).fill(0);
  const tmp = new Array(nums.length);

  // 基数排序
  // 低16位排序
  for (let n of nums) {
    cnt[n & 0xffff]++;
  }
  // 前缀和计算下标
  for (let i = 1; i < 2 ** 16; i++) {
    cnt[i] += cnt[i - 1];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    tmp[--cnt[nums[i] & 0xffff]] = nums[i];
  }

  cnt.forEach((v, i, arr) => (arr[i] = 0)); // 重置

  // 高16位排序
  for (let n of tmp) {
    cnt[getHigh16(n)]++;
  }
  for (let i = 1; i < 2 ** 16 - 1; i++) {
    cnt[i] += cnt[i - 1];
  }
  for (let i = tmp.length - 1; i >= 0; i--) {
    nums[--cnt[getHigh16(tmp[i])]] = tmp[i];
  }

  let result = 0;

  for (let i = 1; i < nums.length; i++) {
    result = Math.max(result, nums[i] - nums[i - 1]);
  }
  return result;
};
// @lc code=end
