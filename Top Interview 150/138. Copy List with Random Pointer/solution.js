/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) return null

  // Map to store the mapping between original nodes and copied nodes
  const map = new Map()

  // First pass: create all the new nodes and store the mapping
  let current = head
  while (current) {
    map.set(current, new _Node(current.val, null, null))
    current = current.next
  }

  // Second pass: set the next and random pointers for the copied nodes
  current = head
  while (current) {
    const copiedNode = map.get(current)
    copiedNode.next = map.get(current.next) || null
    copiedNode.random = map.get(current.random) || null
    current = current.next
  }

  // Return the head of the copied list
  return map.get(head)
}
