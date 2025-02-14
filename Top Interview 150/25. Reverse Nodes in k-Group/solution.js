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
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // Helper function to reverse a linked list
  const reverseList = (head, k) => {
    let prev = null
    let curr = head
    while (k > 0) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
      k--
    }
    return prev
  }

  // Count the number of nodes in the list
  let count = 0
  let node = head
  while (node && count < k) {
    node = node.next
    count++
  }

  // If there are at least k nodes, reverse them
  if (count === k) {
    const reversedHead = reverseList(head, k)
    // After reversing, head is now the last node of the reversed group
    // So, we connect it to the result of the next group
    head.next = reverseKGroup(node, k)
    return reversedHead
  }

  // If there are fewer than k nodes, return the head as is
  return head
}
