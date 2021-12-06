/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head;
  let p = (slow = newHead = new ListNode('', head)); // 快慢指针
  for (let i = 0; i < n + 1; i++) { // n+1 是为了获得被删除节点的前一个节点
    p = p.next;
  }
  while (p) {
    p = p.next;
    slow = slow.next;
  }
  slow.next = slow.next.next; // 删除目标节点
  return newHead.next;
};
// @lc code=end
