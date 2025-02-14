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
var deleteDuplicates = function (head) {
  // Create a dummy node to handle edge cases
  let dummy = new ListNode(0)
  dummy.next = head

  let prev = dummy
  let curr = head

  while (curr !== null) {
    // If current node has duplicates
    if (curr.next !== null && curr.val === curr.next.val) {
      // Skip all nodes with the same value
      let duplicateVal = curr.val
      while (curr !== null && curr.val === duplicateVal) {
        curr = curr.next
      }
      // Update prev.next to skip duplicates
      prev.next = curr
    } else {
      // No duplicates, move prev to current node
      prev = curr
      curr = curr.next
    }
  }

  return dummy.next
}
