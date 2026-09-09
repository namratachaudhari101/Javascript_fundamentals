Control flow determines the execution order of instructions based on conditional logic and loops.

  // 04-control-flow.js

// Conditional: if-else
const marks = 82;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// Conditional: switch
const status = "PENDING";
switch (status) {
  case "ACTIVE":
    console.log("User is active");
    break;
  case "PENDING":
    console.log("Verification in progress");
    break;
  default:
    console.log("Unknown status");
}

// Loops
// 1. Traditional for loop
for (let i = 1; i <= 3; i++) {
  console.log(`Step ${i}`);
}

// 2. for...of (iterables like arrays)
const fruits = ["Apple", "Mango", "Banana"];
for (const fruit of fruits) {
  console.log(fruit);
}

// 3. for...in (object keys)
const car = { brand: "Tesla", model: "Model 3" };
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}

// 4. while & do...while
let count = 0;
while (count < 2) {
  console.log("Count:", count);
  count++;
}

//do-while
let count = 0;
do{
  console.log("Count:", count);
  count++;
}while (count < 2)
