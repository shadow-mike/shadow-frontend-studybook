/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const visited = new Array(numCourses);
    const path = new Array(numCourses);
    const graph = new Array(numCourses);
    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
    }
    let hasCycle = false;
    // 构建图
    for (let i = 0; i < prerequisites.length; i++) {
        const [from, to] = prerequisites[i];
        graph[to] ? graph[to].push(from) : (graph[to] = [from]);
    }
    // 遍历判环
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle) break;
        traverse(graph, i)
    }
    function traverse(graph, i) {
        if (path[i]) {
            hasCycle = true;
        }
        if (visited[i] || hasCycle) {
            return;
        }
        visited[i] = true; // 标记被遍历过的节点
        path[i] = true; // 当前遍历途径的路径
        for (let from of graph[i]) {
            traverse(graph, from);
        }
        path[i] = false;
    }
    return !hasCycle;
};
// @lc code=end

