// Implement an EventTarget class (similar to the EventTarget interface of the DOM), which keeps
// tracks of event listeners and dispatches event.
//
// Your EventTarget class should have the following three methods:
//
// 1. addEventListener
//      
//     This function takes in two arguments: the name of an event as a string and a callback function,
//     to be called when the event is dispatched to the target.
//  
// 2. removeEventListener
//
//     This function takes in the same arguments as addEventListener and removes the relevant event listener. 
//
// 3. dispatchEvent
//
//     This function takes in the name of an event as a string. If there are no event listeners for that
//     event, nothing should happen. Otherwise event listeners that do exist for that event should have
//     their callback functions invoked.

// @ts-ignore
class EventTarget {
  
    addEventListener(name: string, callback: any) {
      // Write your code here.
      
    }
  
    removeEventListener(name, callback) {
      // Write your code here.
    }
  
    dispatchEvent(name) {
      // Write your code here.
    }
  }