// Array -- Ordered collections of items offering built-in manipulation methods.
// 06-arrays.js
const queue = ["User1", "User2"];

// Mutation methods
queue.push("User3");      // Add to end -> ['User1', 'User2', 'User3']
queue.pop();              // Remove from end -> ['User1', 'User2']
queue.unshift("Admin");   // Add to front -> ['Admin', 'User1', 'User2']
queue.shift();            // Remove from front -> ['User1', 'User2']

// Processing methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);           // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0);    // [2, 4]
const total = numbers.reduce((acc, curr) => acc + curr, 0); // 15
