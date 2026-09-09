// JavaScript includes primitive types (String, Number, Boolean, Null, Undefined, Symbol, BigInt) and reference types (Object, Array, Function).

// 03-datatypes-operators.js

// Primitives
const name = "ApexaiQ";           // String
const age = 25;                   // Number
const isEmployed = true;          // Boolean
const emptyValue = null;          // Null (intentional absence of value)
let notAssigned;                  // Undefined (declared but no value)

// Reference Types
const userProfile = { id: 101, role: "Intern" }; // Object
const skills = ["JavaScript", "HTML", "CSS"];    // Array

// Operators
let x = 10;
let y = 3;

console.log(x + y);       // Arithmetic: Addition (13)
console.log(x % y);       // Arithmetic: Modulus (1)
console.log(x === "10");  // Comparison: Strict equality (false)
console.log(x !== y);     // Comparison: Strict inequality (true)
console.log(x > 5 && y < 5); // Logical: AND (true)
