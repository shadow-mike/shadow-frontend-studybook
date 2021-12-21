/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) return head;
    const hair = new ListNode('', head);
    let fast = slow = hair;
    // 得到中间位置
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next&&fast.next.next;
    }
    // 分成左右2个链表
    let right = slow.next;
    let left = head;
    slow.next = null; // 断开和right链表的连接
    right = reverse(right); // 反转右链表
    let p = hair;
    while (left || right) {
        if (left) {
            p.next = left;
            p = p.next;
            left = left.next;
        }
        if (right) {
            p.next = right;
            p = p.next;
            right = right.next;
        }
    }
    return hair.next;
};

function reverse(head) {
    if (!head) return head;
    let cur = head, prev = null;
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
// @lc code=end

