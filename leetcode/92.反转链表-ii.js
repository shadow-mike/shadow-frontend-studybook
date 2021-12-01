/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return head;
  const hair = new ListNode('', head);
  let p = hair,
    prev = null;
  const l = right - left + 1;
  while (left--) {
    prev = p;
    p = p.next;
  }
  prev.next = reverse(p, l);

  return hair.next;
};

function reverse(head, num) {
  let prev = null,
    p = head;
  while (num) {
    const next = p.next;
    p.next = prev;
    prev = p;
    p = next;
    num--;
  }
  head.next = p;
  return prev;
}
// @lc code=end
