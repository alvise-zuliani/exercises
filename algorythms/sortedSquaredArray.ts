// Write a function that takes in a non-empty arrau of integers that are sorted in ascending
// order and returns a new array of the same length with the squares of the original integers
// also sorted in ascending order

export function sortedSquaredArray(array: number[]): number[] {
  const squaredArray: number[] = new Array(array.length);
  let left: number = 0;
  let right: number = array.length - 1;

  let index: number = right;
  while (left <= right) {
    const leftSquared = array[left] ** 2;
    const rightSquared = array[right] ** 2;
    
    if (leftSquared > rightSquared) {
      squaredArray[index] = leftSquared;
      left++;
    } else {
      squaredArray[index] = rightSquared;
      right--;
    }
    index--;
  }
  
  return squaredArray;
}
