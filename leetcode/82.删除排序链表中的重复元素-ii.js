/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
  let slow = (newHead = new ListNode('', head)),
    fast = head;
  while (fast && fast.next) {
    let hasDup = false; // 如果本轮中存在重复节点，则置为true
    while (fast.next && fast.val === fast.next.val) {
      fast = fast.next;
      hasDup = true;
    }
    if (hasDup) {
      slow.next = fast.next; // 如果有重复，则置修改slow的next
    } else {
      slow = fast;
    }
    fast = fast.next;
  }
  return newHead.next;
};
// @lc code=end
