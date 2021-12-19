/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function (head, k) {
    if (!head) return head;
    let fast = slow = head;
    while (k > 0) {
        fast = fast.next;
        k--;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow.val;
};