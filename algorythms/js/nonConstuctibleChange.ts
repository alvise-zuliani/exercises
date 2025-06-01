// Given an areray of positive integers representing the values of coins in your possession, write
// a function that returns the minimum amount of change (the minimum sum of money) that you cannot
// create. The given coins can have any positive integer value and aren't necessarily unique.

// Complexity: O(n * log n) T; O(1) S
export function nonConstructibleChange(coins: number[]) {
    // Write your code here.
    coins.sort((a, b) => a - b)
    let change: number = 0;
    for (let i: number = 0; i < coins.length; i++) {
        if (coins[i] > change + 1) {
            return change + 1;
        }
        change += coins[i]
    }
    return change + 1;; 
}
  