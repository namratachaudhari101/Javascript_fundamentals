/* Variables (var, let, const)
var: Legacy (pre-ES6). Function-scoped, hoisted, allows redeclaration and reassignment. Avoid in modern code.

let: Block-scoped, cannot be redeclared in the same scope, can be reassigned.

const: Block-scoped, cannot be redeclared or reassigned. Used by default for constants, objects, and arrays.*/

// 02-variables.js

// 1.const (default choice)
const company = "ApexaiQ";
// company = "Other"; // TypeError: Assignment to constant variable.

// 2. let (when reassignment is necessary)
let score = 10;
score = 15; // Valid

// 3. var (legacy - avoid)
var legacyCounter = 1;
var legacyCounter = 2; // Allowed, which leads to bugs

