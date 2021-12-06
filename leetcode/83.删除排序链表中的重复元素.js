/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  if (!head) return head;
  let p = head;
  while (p && p.next) {
    let nextDiff = p.next;
    while (nextDiff && p.val === nextDiff.val) {
      nextDiff = nextDiff.next; // 找到下一个与p.val值不相等的节点
    }
    p.next = nextDiff;
    p = nextDiff;
  }
  return head;
};
// @lc code=end
