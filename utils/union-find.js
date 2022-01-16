// Union Find
// https://labuladong.gitee.io/algo/2/19/38/
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