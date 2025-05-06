// Implement the following three functions of a basic JavaScript testing framework:
//
// 1. "describe" - This function defines a test suite of related test cases. It takes in a string "testSuiteName" and a callback "func", 
// which makes one or more calls to "it".
//
// 2. "it" - This function defines a single test case in a test suite and is called within a "describe"'s callback "func". It takes in a
// string "testCaseName" and its own callback "func", which makes one or more calls to "expect".
// 
// 3. "expect" - This function defines a single check in a test case and is called within an it's callback func. It takes an arbitrary
// parameter actual and returns an object with the following three functions that are used to compare "actual" to other values:
//    a) expect(actual).toExist() - This function checks that "actual" is neither null nor undefined.
//    b) expect(actual).toBe(expected) - This function checks that "actual" is strickly equal to "expected".
//    c) expect(actual).toBeType(type) - This function checks that "actual" if of the type "type", which can be any string returned by the "typeof" operator. 

function describe(testSuitName: string, func: any) {
    console.log(`beginning test suite name ${testSuitName}`);

    try {
        func();
        console.log(`successfully completed test suite ${testSuitName}`)
    } catch (error) { // catch the error and log it to the console
        const {testCaseName, errorMessage} = error;
        console.error(`failed running test suite ${testSuitName} on test case ${testCaseName} with error message ${errorMessage}`)
    }
}

function it(testCaseName: string, func: any) {
    console.log(`beginning test case ${testCaseName}`);

    try {
        func();
        console.log(`successfully completed test case ${testCaseName}`);
    } catch (errorMessage) { // catch the error and throw it again to the outer level
        throw {testCaseName, errorMessage};
    }
}

function expect(actual: any) {
    return new ExpectFunctions(actual);
}

class ExpectFunctions {
    actual: any;
    strActual: string;

    constructor(actual){
        this.actual = actual; // store the value
        this.strActual = JSON.stringify(actual); // store stringified value for logging
    } 

    toExist() {
        if (this.actual == null) { // check if actual is not null or undefined
            throw `expected value to exist but got ${this.strActual}`;
        }
    }

    toBe(expect) {
        if (this.actual !== expect) { // check if actual is strictly equal to expect
            throw `expected ${this.strActual} to be ${JSON.stringify(expect)}`;
        }
    }

    toBeType(type) {
        const typeOfActual: string = typeof this.actual;
        if (typeOfActual !== type) { // check if typeof string is strictly equal to type
            throw `expected ${this.strActual} to be of type ${type} but got ${typeOfActual}`;
        }
    }
}