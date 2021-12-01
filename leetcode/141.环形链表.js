/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let p1 = head,
    p2 = head.next;
  while (p2 && p2.next) {
    if (p1 === p2) return true;
    p2 = p2.next.next;
    p1 = p1.next;
  }
  return false;
};
// @lc code=end
