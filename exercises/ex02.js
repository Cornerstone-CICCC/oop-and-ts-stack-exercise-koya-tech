// Create a function called lowercaseStrings that converts all strings in the stack to lowercase
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function lowercaseStrings(stack) {
  // your code here
  let tempStack = new Stack();
  while (!stack.isEmpty()) {
    let string = stack.pop();
    if (typeof string === 'string') {
      tempStack.push(string.toLowerCase());
    } else {
      tempStack.push(string);
    }
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  return stack;
}

// Create stack
const stack = new Stack();
stack.push("Hello");
stack.push("woRLd");
stack.push("good");
stack.push("MORNING");

lowercaseStrings(stack)
console.log(stack.printStack()) // ["hello", "world", "good", "morning"]