/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;
    let cur = head;
    let cnt = 1; // 计算节点数
    while (cur.next) {
        cur = cur.next;
        cnt++;
    }
    cur.next = head;
    let moveNum = cnt - k%cnt; // 等价右移k%cnt位
    cur = new ListNode('', head); // 指针从虚拟节点开始往右指moveNum位
    while (moveNum--) {
        cur = cur.next;
    }
    const newHead = cur.next;
    cur.next = null; // 断开形成尾结点
    return newHead;
};
// @lc code=end

