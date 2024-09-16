/*
  slow and fast pointer
  :- increase slow pointer by 1 and increase fast pointer by 2 steps
  if both pointers are equal then cycle is present
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function hasCycle(head: ListNode | null): boolean {
//   let slow = head;
//   let fast = head;
//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (fast === slow) {
//       return true;
//     }
//   }
//   return false;
// }
