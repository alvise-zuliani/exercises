// Write a function that takes in a non-empty array of distinct integers and an integer representing
// a target sum. If any two numbers in the input array sum up to the target sum, the function should
// return them in an array, in any order. If no two numbers sum up to the target sum, the function
// should return an empty array.
//
// Note that the target sum has to be obtained by summing two different integers in the array; you
// can't add a single integer to itself in order to obtain the target sum.
//
// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Time Complexity: O(n)T, O(n)S
// @ts-ignore
export function twoNumberSum(array: number[], targetSum: number) {
    const seenArrayMembers: Map<number, boolean> = new Map();
    for (let i: number = 0; i < array.length; i++) {
        const currentNum = array[i];
        const currentComplementary: number = targetSum - currentNum;
        // check for a complementary in the seen array members
        if (seenArrayMembers.has(currentComplementary)){
            return [currentNum, currentComplementary];
        }
        // add to seen array members
        seenArrayMembers.set(currentNum, true);
    }
    // return default empty array
    return [];
}
    
// Time Complexity: O(n^2)T, O(1)S
// @ts-ignore
export function twoNumberSum(array: number[], targetSum: number) {

    for (let i: number = 0; i < array.length; i++) {
        const currentNum: number = array[i];
        const complementary: number = targetSum - currentNum;
        if (array.includes(complementary)){
            return [currentNum, complementary]
        }
    }
    // return default empty array
    return [];
}

// Complexity: O(n * log n)T; O(1)S
// @ts-ignore
export function twoNumberSum(array: number[], targetSum: number) {
    // we sort the array in an ascending order
    array.sort((a, b) => a - b);

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        // assign indices to head and tail
        let head: number = array[left];
        let tail: number = array[right];

        // since the array is sorted, we can move the tail or
        // head to check for matches by comparing to the target
        // number, knowing that moving to the right means the 
        // sum will be higher, while moving to the left means
        // the opposite.
        if (head + tail === targetSum) {
            return [head, tail];
        } else if (head + tail > targetSum) {
            // sum is too high, we need to move the tail back
            right --;
        } else if (head + tail < targetSum) {
            // sum is too low, we need to move the head forward
            left ++;
        }
    }
    // return default empty array
    return [];
}   