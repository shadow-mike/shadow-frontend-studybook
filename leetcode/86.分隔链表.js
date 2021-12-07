/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let small = sHead = new ListNode('', null);
    let big = bHead = new ListNode('', null);
    let p = head;
    while (p) {
        const next = p.next;
        p.next = null;
        if (p.val >= Number(x)) {
            big.next = p;
            big = big.next;
        } else {
            small.next = p;
            small = small.next;
        }
        p = next;
    }
    // // 断开后续不属于自己队列的节点
    // if (small.next) {
    //     small.next = null;
    // } else {
    //     big.next = null;
    // }
    small.next = bHead.next;
    return sHead.next;
};
// @lc code=end

