/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    if (!head) return head;
    const big = new ListNode(''), small = new ListNode('');
    let p = head, bigP = big, smallP = small;
    while (p) {
        const next = p.next;
        if (p.val < x) {
            smallP.next = p;
            p.next = null;
            smallP = p;
        } else {
            bigP.next = p;
            p.next = null;
            bigP = p;
        }
        p = next;
    }
    smallP.next = big.next;
    return small.next;
};