/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0
  let totalCost = 0
  let currentGas = 0
  let startIndex = 0

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i]
    totalCost += cost[i]
    currentGas += gas[i] - cost[i]

    // If currentGas is negative, reset and try starting from the next station
    if (currentGas < 0) {
      startIndex = i + 1
      currentGas = 0
    }
  }

  // If total gas is less than total cost, it's impossible to complete the circuit
  if (totalGas < totalCost) {
    return -1
  } else {
    return startIndex
  }
}
