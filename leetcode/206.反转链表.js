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
// 迭代
// var reverseList = function (head) {
//   if (!head) return head;
//   let p = head,
//     prev = null;
//   while (p) {
//     let next = p.next;
//     p.next = prev;
//     prev = p;
//     p = next;
//   }
//   return prev;
// };

// 递归
function reverseList(head) {
  let cur = head;
  if (!cur || !cur.next) return cur;
  const last = reverseList(cur.next);
  cur.next.next = cur;
  cur.next = null;
  return last;
}
// @lc code=end
