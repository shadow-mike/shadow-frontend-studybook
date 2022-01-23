/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
  const uf = new UF(edges.length);
  const parents = new Array(edges.length + 1);
  const nexts = new Array(edges.length + 1);
  let result = null;
  for (let path of edges) {
    const [from, to] = path;
    parents[to] ? parents[to].push(from) : (parents[to] = [from]);
    nexts[from] = to;
    // 说明to节点已经在树中，（若忽略箭头方向）存在环
    if (uf.connected(from, to)) {
      result = path;
    }
    uf.union(from, to);
  }

  for (let i = 1; i <= parents.length; i++) {
    if (parents[i] && parents[i].length > 1) {
      let tmp = null;
      for (let j = 0; j < parents[i].length; j++) {
        let next = nexts[i];
        // 如果有环，并且i有指向其他节点，则开始判环
        while (result && next && next !== i) {
          if (next === parents[i][j]) return [parents[i][j], i]; // 在环上且是多个入度中的一个，直接返回结果
          next = nexts[next];
        }
        tmp = [parents[i][j], i];
      }
      result = tmp; // 不存在环时，取多个入度中的最后一个；
    }
  }
  return result;
};
class UF {
  constructor(n) {
    this.parent = [];
    this.count = n;
    for (let i = 1; i <= n; i++) {
      this.parent[i] = i;
    }
  }
  find(x) {
    while (x !== this.parent[x]) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }
  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA === rootB) return;
    this.parent[rootA] = rootB;
    this.count--;
  }
  connected(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    return rootA === rootB;
  }
}
// @lc code=end
