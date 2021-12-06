/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return head;
    let p = head;
    // 复制原节点的值及random指针，并连接到原节点后面
    while (p) {
        const next = p.next;
        p.next = new Node(p.val, next, p.random);
        p = next;
    }
    p = head.next;
    // 修正复制节点们的random指向
    while (p) {
        p.random = p.random ? p.random.next : p.random; // 特判null的情况
        p = p.next ? p.next.next : p.next; // 不是null就取下一个新节点
    }
    let pn = newHead = new Node('', head.next);
    p = head;
    while (p && pn) {
        const next = p.next;
        p.next = next.next;
        pn.next = next;
        p = p.next;
        pn = pn.next;
    }
    return newHead.next;
};
// @lc code=end

