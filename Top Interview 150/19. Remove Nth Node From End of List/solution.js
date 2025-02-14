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
  // Create a dummy node to handle edge cases where the head needs to be removed
  let dummy = new ListNode(0)
  dummy.next = head

  let fast = dummy
  let slow = dummy

  // Move fast pointer n steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }

  // Move both pointers until fast reaches the end
  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }

  // Remove the nth node from the end
  slow.next = slow.next.next

  // Return the new head
  return dummy.next
}
