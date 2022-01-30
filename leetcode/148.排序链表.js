/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
// var sortList = function(head) {
//     if (!head) return head;
//     const hair = new ListNode(null);
//     let cur = head;
//     while (cur) {
//         const next = cur.next;
//         const val = cur.val;
//         let p = hair;
//         while (p.next && p.next.val < val) {
//             p = p.next;
//         }
//         if (p.next) {
//             cur.next = p.next;
//         } else {
//             cur.next = null;
//         }
//         p.next = cur;
//         cur = next;
//     }
//     return hair.next;
// };


var sortList = function(head) {
    if (!head) return head;
    return sort(head);
}

function sort(node) {
    if (!node.next) return node;
    let middle = findMiddle(node);
    const next = middle.next;
    middle.next = null;
    let left = sort(node);
    let right = sort(next);
    // console.log('middle', left, right)
    // 合并2个有序链表
    const head = new ListNode(null);
    let leftP = left, rightP = right, p = head;
    while (leftP && rightP) {
        if (leftP.val > rightP.val) {
            p.next = rightP;
            rightP = rightP.next;
        } else {
            p.next = leftP;
            leftP = leftP.next;
        }
        p.next.next = null;
        p = p.next;
    } 
    // console.log(head, p, leftP, rightP)
    if (leftP) {
        p.next = leftP;
    } else if (rightP) {
        p.next = rightP;
    }
    // console.log('head', head)
    return head.next;
}
function findMiddle(node) {
    if (!node) return node;
    let slow = node, quick = node.next;
    while (quick && quick.next) {
        slow = slow.next;
        quick = quick.next.next;
    }
    return slow;
}
// @lc code=end

