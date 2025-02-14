var RandomizedSet = function () {
  this.map = new Map() // Stores value -> index
  this.list = [] // Stores values
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false
  this.map.set(val, this.list.length)
  this.list.push(val)
  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false

  let index = this.map.get(val)
  let lastElement = this.list[this.list.length - 1]

  // Swap with last element
  this.list[index] = lastElement
  this.map.set(lastElement, index)

  // Remove last element
  this.list.pop()
  this.map.delete(val)

  return true
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.list.length)
  return this.list[randomIndex]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
