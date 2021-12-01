/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
    if (!head) return head;
    let p = end = head;
    for (let i = 0; i < k; i++) {
        if (!end) return head; // 不满足k个节点，不反转直接返回头节点；
        end = end.next;
    }
    const newHead = reverse(p, end);
    // p指向的head变成了当前一组的尾节点，尾结点的next指向下一组头节点；
    p.next = reverseKGroup(end, k); 
    return newHead;
};

function reverse(head, end) {
    if (!head) return head;
    let prev = null, cur = head;
    while (cur !== end) { // end不反转
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev; // 返回新的头节点
}
// @lc code=end

