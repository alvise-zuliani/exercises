//
// Write a flatten function that takes in a value and returns a flattened version of that value
//
// For the purpose of this problem, a flattened value is defined as follows:
// - Primitve values should be left unchanged.
// - Nested arrays should have their values brought up to the top level array.
// - Nested objects should have their key-value paris brought up to the top level object.
// - Arrays nested in objects and objects nested in arrays should be flattened.
// 
// For simplicity, you can assume the value as well as any nested values will not be functions.
// Additionally, you can assume that all object keys are strings. Your solution can return a
// flattened value in place, or it can return a new value, either is acceptable.
//
// Your code should not call the native Array.prototype.flat() function.

function flatten(value) {

    // Leave primitive values unchanged. Since null is typeof object, we check that too.
    if (typeof value !== 'object' || value === null){
        return value;
    }

    if (Array.isArray(value)){
        return flattenArray(value);
    }

    return flattenObject(value);
}

function flattenArray(array) {
    // We call the flatten function on each value in the array and reduce to a single value.
    return array.reduce((acc, curr) => acc.concat(flatten(curr)), [])
}

function flattenObject(object) {
    const flattenedObj = {};

    for (const [key, value] of Object.entries(object)) {
        // We iterate through the object's entries and call flatten.
        const valueIsObject = typeof value === 'object' && value !== null && !Array.isArray(value);
        const flattenedValue = flatten(value);

        if (valueIsObject) {
            // If the value is an object, assign its keys to flattenedObj
            Object.assign(flattenedObj, flattenedValue);
        } else {
            // If it is not an object, we assign it to the original key in our flattenedObj
            flattenedObj[key] = flattenedValue;
        }
    }

    return flattenedObj;
}