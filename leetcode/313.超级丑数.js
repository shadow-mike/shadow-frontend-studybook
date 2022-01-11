/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const arr = [1];
    const idxs = primes.map(() => 0);
    for (let i = 1; i < n; i++) {
        arr[i] = Math.min(...primes.map((num, idx) => num * arr[idxs[idx]]));
        primes.map((num, idx) => {
            if (arr[i] % num === 0) idxs[idx]++;
        })
    }
    return arr[n - 1];
};
// @lc code=end

