/*
 * @lc app=leetcode.cn id=721 lang=javascript
 *
 * [721] 账户合并
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const emailToIdx = new Map();
    const emailToName = new Map();
    let emailCount = 0;
    for (let account of accounts) {
        const name = account[0];
        for (let i = 1; i < account.length; i++) {
            if (!emailToIdx.has(account[i])) {
                emailToIdx.set(account[i], emailCount++);
            }
            !emailToName.has(account[i]) && emailToName.set(account[i], name);
        }
    }
    const uf = new UF(emailCount);
    // 构建连通图
    for (let account of accounts) {
        const firstIdx = emailToIdx.get(account[1])
        for (let i = 2; i < account.length; i++) {
            const idx = emailToIdx.get(account[i]);
            uf.union(firstIdx, idx);
        }
    }
    // 将一个连通图上的索引转换成email并存储到Map中
    const map = new Map();
    for (let [email, i] of emailToIdx) {
        const idx = uf.find(i);
        map.has(idx) ? map.get(idx).push(email) : map.set(idx, [email]);
    }
    const result = [];
    for (let [idx, emails] of map) {
        const name = emailToName.get(emails[0]);
        result.push([name, ...emails.sort()]);
    }
    return result;
};

class UF {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((ele, idx) => idx);
        this.count = n;
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

