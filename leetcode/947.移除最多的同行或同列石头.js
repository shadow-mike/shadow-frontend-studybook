/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
 var removeStones = function(stones) {
    const uf = new UF();
    for (const [x, y] of stones) {
        uf.join(x, y + 10000); // 将二维转为一维来进行join。因为按题意最大值是10**4，所以y被转为y + 1000来避免与x冲突；
    }
    // 一个连通图里可以移除到只剩一个石头，即几个连通图就剩几块石头
    return stones.length - uf.count;
};

class UF {
    constructor(n = 0) {
        this.count = n;
        this.parent = [];
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }
    join(a, b) {
        const rootA = this.find(a) || (this.count++, this.parent[a] = a);
        const rootB = this.find(b) || (this.count++, this.parent[b] = b);
        if (rootA === rootB) return;
        this.parent[rootA] = rootB;
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

