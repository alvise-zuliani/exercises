// Write a debounce function that takes in a required callback function, a required delay in milliseconds, and an optional immediate boolean, which defaults to false.

function debounce(callback, delay, immediate = false) {
    let timerID;

    return function(...args) {
        clearTimeout(timerID);
        
        if (immediate) {
            callback.apply(this, args);
        }

        timerID = setTimeout(() => {
            if (immediate) {
                callback.apply(this, args);
            }
            timerID = null;
        }, delay)

    }
}