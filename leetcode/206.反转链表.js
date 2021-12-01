/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  if (!head) return head;
  // const hair = new ListNode('', head);
  // return hair.next;
  let p = head,
    prev = null;
  while (p) {
    let next = p.next;
    p.next = prev;
    prev = p;
    p = next;
  }
  return prev;
};
// @lc code=end
