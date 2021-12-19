/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 维护2个栈，分别存入2个链表的值，使得能从后累加他们；记录一个表示当前需要进位的变量；
  const s1 = [],
    s2 = [];
  let ten = 0;
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  const hair = new ListNode('');
  while (s1.length || s2.length || ten) {
    const val = (s1.pop() || 0) + (s2.pop() || 0) + ten;
    ten = val >= 10 ? 1 : 0; // or ten = val / 10 | 0
    const newNode = new ListNode(val % 10, hair.next);
    hair.next = newNode;
  }
  return hair.next;
};
// @lc code=end
