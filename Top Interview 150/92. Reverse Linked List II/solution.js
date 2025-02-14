/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || left === right) {
    return head
  }

  // Create a dummy node to handle the case when left is 1
  let dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy

  // Move prev to the node before the left position
  for (let i = 1; i < left; i++) {
    prev = prev.next
  }

  // Start reversing from the left position
  let current = prev.next
  let next = null
  let tail = current // This will be the tail of the reversed sublist

  for (let i = left; i <= right; i++) {
    next = current.next
    current.next = prev.next
    prev.next = current
    current = next
  }

  // Connect the tail of the reversed sublist to the rest of the list
  tail.next = current

  return dummy.next
}
