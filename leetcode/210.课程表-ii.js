/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const indgree = new Array(numCourses).fill(0); // 维护每个节点的入度
    const graph = new Array(numCourses);
    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }
    // 先上完from，才能上to
    for (let i = 0; i < prerequisites.length; i++) {
        const [to, from] = prerequisites[i];
        graph[from].push(to);
        indgree[to]++;
    }
    let count = 0;
    const q = [];
    const result = [];
    for (let i = 0; i < numCourses; i++) {
        if (indgree[i] === 0) { // 入度为0，说明它可以立刻上
            q.push(i);
        }
    }
    // BFS
    while (q.length) {
        const i = q.pop();
        count++;
        result.push(i);
        for (let to of graph[i]) {
            indgree[to]--;
            if (indgree[to] === 0) {
                q.push(to);
            }
        }
    }
    if (count !== numCourses) return []; // 每个节点都只会被遍历一次，否则成环；
    return result;
};
// https://labuladong.gitee.io/algo/2/19/36/
// @lc code=end

