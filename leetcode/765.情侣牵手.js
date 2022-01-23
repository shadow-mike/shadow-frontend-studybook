/*
 * @lc app=leetcode.cn id=765 lang=javascript
 *
 * [765] 情侣牵手
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    const pairCount = row.length >>> 1;
    const uf = new UF(pairCount);
    for (let i = 0; i < pairCount; i++) {
        const [a, b] = [row[2 * i], row[2 * i + 1]];
        uf.union(a >>> 1, b >>> 1);
    }
    return pairCount - uf.count;
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
        this.parent[rootA] = rootB;
        this.count--;
    }
    find(x) {
        while (x !== this.parent[x]) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }
}
// @lc code=end

