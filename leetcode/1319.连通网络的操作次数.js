/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  const uf = new UF(n);
  let redundancies = 0;
  for (let c of connections) {
    if (uf.connected(c[0], c[1])) {
      redundancies++;
    }
    uf.union(c[0], c[1]);
  }
  const needLineCount = uf.count - 1;
  return redundancies >= needLineCount ? needLineCount : -1;
};

class UF {
  constructor(n) {
    this.parent = [];
    this.count = n;
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA === rootB) return;
    this.parent[rootA] = this.parent[rootB];
    this.count--;
  }
  connected(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    return rootA === rootB;
  }
  find(x) {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }
}
// @lc code=end
