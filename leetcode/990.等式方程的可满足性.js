/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const uf = new UF(26);
    for (let fml of equations) {
        if (fml[1] === '=') {
            if (fml[0] === fml[3]) continue;
            uf.union(getIdx(fml[0]), getIdx(fml[3]));
        }
    }

    for (let fml of equations) {
        if (fml[1] === '!') {
            if (uf.connected(getIdx(fml[0]), getIdx(fml[3]))) {
                return false;
            }
        }
    }
    return true;
};
function getIdx(ctr) {
    return ctr.charCodeAt() - 'a'.charCodeAt();
}

// Union Find
class UF {
    constructor(n) {
        this.parent = new Array(n);
        this.size = new Array(n);
        this.count = n;
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }
    union(a, b) {
        const parentA = this.find(a);
        const parentB = this.find(b);
        if (parentA === parentB) return;
        // 将小树连接到大树上
        if (this.size[parentA] > this.size[parentB]) {
            this.parent[parentB] = this.parent[parentA];
            this.size[parentA] += this.size[parentB];
        } else {
            this.parent[parentA] = this.parent[parentB];
            this.size[parentB] += this.size[parentA];
        }
        this.count--;
    }
    connected(a, b) {
        const parentA = this.find(a);
        const parentB = this.find(b);
        return parentA === parentB;
    }
    find(x) {
        while (this.parent[x] !== x) {
            // 让当前节点的父级指针指向父级节点的父级指针
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }
}

// @lc code=end

