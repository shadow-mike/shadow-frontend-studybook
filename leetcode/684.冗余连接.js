/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
	let result = edges[0];
	const uf = new UF(edges.length);
	for (let e of edges) {
		if (uf.connected(e[0], e[1])) {
			result = e;
		}
		uf.union(e[0], e[1]);
	}
	return result;
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
