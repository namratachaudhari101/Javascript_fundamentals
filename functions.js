// A function is a reusable block of code designed to perform a specific task.

  // 05-functions.js

// 1. Function Declaration (Hoisted)
function greet(user) {
  return `Hello, ${user}!`;
}

// 2. Function Expression (Not hoisted)
const add = function (a, b) {
  return a + b;
};

// 3. Arrow Function (ES6, concise syntax, lexical 'this')
const multiply = (a, b) => a * b;

// 4. Anonymous Function (used as callbacks)
setTimeout(function () {
  console.log("Anonymous callback executed after 1 second");
}, 1000);

// 5. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed immediately upon script load");
})();

// 6. Higher-Order Function (takes or returns a function)
function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}
console.log(operateOnNumbers(5, 4, multiply)); // Output: 20

// 7. Recursive Function (calls itself until a base condition)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
