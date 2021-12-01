/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return head;
  let p1 = head,
    p2 = head.next;
  while (p2 && p2.next) {
    if (p1 === p2) break;
    p1 = p1.next;
    p2 = p2.next.next;
  }
  if (!p2 || !p2.next) return null;
  p1 = head;
  p2 = p2.next;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};
// @lc code=end
