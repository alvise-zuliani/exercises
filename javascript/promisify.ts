// Write a promisify function that takes in a required callback function and returns
// a new "promisified" version of that function
// 
// The callback function can take in any number of parameters, but its last parameter 
// is guaranteed to be another callback function, which takes in two parameters: an 
// error and a value. We'll call this other callback function handleErrorAndValue for
// simplicity.

function promisify(callback) {
    // Write your code here.
    return function (...args) {
      return new Promise((resolve, reject) => {
        function handleErrorAndValue(error, value) {
          if (error == null) {
            resolve(value);
          } else {
            reject(error);
          }
        }
        
        callback.call(this, ...args, handleErrorAndValue)
      });
    }   
}
