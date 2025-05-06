// Without calling Array.prototype.map(), Array.prototype.filter(), Array.prototype.filter(), Array.prototype.reduce(),
// or Array.prototype.forEach(), implement the following three similar functions of the Array prototype:
//
// 1. myMap(callback)
//
//   Without mutating the original array, this function should call the passed callback function on every element of
//   the array and return a new array containing the results of all these calls, in the corresponding order.
//  
//   The callback function can take in up to three parameters:
//     a) The current value in the array.
//     b) The current index in the array.
//     c) The array itself.

Array.prototype.myMap = function (callback: any) {
    const output: any[] = [];
    
    for (let i: number = 0; i < this.length; i++) {
        output.push(callback(this[i], i, this));
    }

    return output;
};

// 2. myFilter(callback)
//
//   Without mutating the original array, this function should call the passed callback function on every element of the
//   array and return a new array containing the values of the original array that, when passed to the callback function,
//   returned true. These values should maintain their original order.
//  
//   The callback function takes in the same arguments as the ones that the callback function in myMap takes in.

Array.prototype.myFilter = function (callback: any) {
    const output: any[] = [];

    for (let i: number = 0; i < this.length; i++) {
        if (callback(this[i], i, this) === true) {
            output.push(this[i]);
        }
    }

    return output;
};

// 3. myReduce(callback, initialValue)
// 
//   Without mutating the original array, this function should call the passed callback function on every element of the
//   array and return the result of the last call to the callback,
//  
//   The callback function can take in up to four parameters:
//     a) The accumulator, which is the return value of the previous call to the callback. On the first call to the callback,
//        the accumulator should be set to the initialValue. If the initialValue is undefined, then it should be set to the
//        first value of the array, and the callback should skip the first element in the array and be called directly on the
//        second element.
//     b) The current value in the array.
//     c) The current index in the array.
//     d) The array itself
//
//   If the array contains no elements, the initialValue should be returned. Note that this differs slightly from the 
//   Array,prototype.reduce function.

Array.prototype.myReduce = function (callback: any, initialValue: any) {
    let acc: any = initialValue;
    for (let i: number = 0; i < this.length; i++) {
        if (i === 0 && initialValue === undefined) {
            acc = this[i];
        } else {
            acc = callback(acc, this[i], i, this);
        }
    }
    return acc;
}