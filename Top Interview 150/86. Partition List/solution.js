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
var partition = function (head, x) {
  // Create two dummy nodes to act as the heads of the two partitions
  let lessHead = new ListNode(0)
  let greaterHead = new ListNode(0)

  // Pointers to the current nodes of the two partitions
  let less = lessHead
  let greater = greaterHead

  // Traverse the original list
  while (head !== null) {
    if (head.val < x) {
      // Append to the less partition
      less.next = head
      less = less.next
    } else {
      // Append to the greater partition
      greater.next = head
      greater = greater.next
    }
    head = head.next
  }

  // Merge the two partitions
  greater.next = null // Ensure the greater partition ends with null
  less.next = greaterHead.next // Connect the less partition to the greater partition

  // Return the head of the merged list
  return lessHead.next
}
