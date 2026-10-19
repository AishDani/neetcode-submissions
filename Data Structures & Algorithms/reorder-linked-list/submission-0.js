/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
       let slow = head;
       let fast = head.next;
       while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
       }

       let secound = slow.next;
       let prev = slow.next = null;
       while(secound !== null){
        const temp = secound.next;
        secound.next = prev;
        prev = secound;
        secound = temp;
       }
       

       let first = head;
       secound = prev;
       while (secound !== null) {
            const tmp1 = first.next;
            const tmp2 = secound.next;
            first.next = secound;
            secound.next = tmp1;
            first = tmp1;
            secound = tmp2;
        }


    }
}
