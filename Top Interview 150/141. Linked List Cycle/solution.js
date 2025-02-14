/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false // No cycle if the list is empty or has only one node
  }

  let slow = head // Tortoise pointer (moves one step at a time)
  let fast = head // Hare pointer (moves two steps at a time)

  while (fast && fast.next) {
    slow = slow.next // Move slow pointer one step
    fast = fast.next.next // Move fast pointer two steps

    if (slow === fast) {
      return true // Cycle detected
    }
  }

  return false // No cycle found
}
