/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head; // 不存在头节点或者不存在第二个节点
    let end = head.next;
    const lastHead = swapPairs(end.next);
    const newHead = reverse(head, end);
    head.next = lastHead;
    return newHead;
};

// 通用函数，反转一组链表
function reverse(head, end) {
    let prev = null, cur = head;
    const endNext = end.next;
    while (cur !== endNext) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
// @lc code=end

