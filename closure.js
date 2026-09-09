// A closure gives a function access to its outer scope's variables even after the outer function has finished executing. Closures enable data encapsulation and private variables.
// 12-closures.js

function createCounter() {
  let count = 0; // Private variable hidden from the global scope

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
// console.log(counter.count);    // undefined (count is encapsulated and protected)
