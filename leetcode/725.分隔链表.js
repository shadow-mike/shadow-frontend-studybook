/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let cnt = 0,
    p = head;
  while (p) {
    cnt++; // 计算得到链表长度
    p = p.next;
  }
  const per = (cnt / k) | 0 || 1; // 得到每段链表长度
  let rest = cnt > k ? cnt % k : 0;
  const result = [head];
  let count = 1;
  p = head;
  while (p) {
    if (count === per) {
        count = 0;
        if (rest) {
            rest--;
            p = p.next;
        }
        const next = p.next;
        p.next = null; // 尾节点断开
        next && result.push(next); // 推入链表头节点
        p = next;
        count++;
    } else {
        p = p.next;
        count++;
    }
  }
  while (result.length < k) { // 不足k个补null 
    result.push(null);
  }
  return result;
};
// @lc code=end
