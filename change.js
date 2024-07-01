var coins = [200, 100, 50, 20, 10, 5, 2, 1];
/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} payable the integer amount (in pennies) payable (to be paid)
 * @param {number} paid the integer amount (in pennies) the person paid
 * @returns {array} change the list of coins we need to dispense to the person
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
function getChange(payable, paid) {
  let change = [];
  let remaining = paid - payable;

  for (let coin of coins) {
    while (remaining >= coin) {
      change.push(coin);
      remaining -= coin;
    }
  }

  return change;
}

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}
