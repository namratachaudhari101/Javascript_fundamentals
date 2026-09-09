 Objects:- Key-value stores representing complex entities and domain models.

// 07-objects.js
const developer = {
  name: "Alex",
  role: "Engineer",
  skills: ["JS", "Python"],
  greet() {
    return `Hi, I am ${this.name}`;
  }
};

// Accessing & Updating
console.log(developer.name);
developer.role = "Senior Engineer";
developer.experience = "3 years"; // Add property
delete developer.experience;      // Remove property

// Object Utility Methods
console.log(Object.keys(developer));   // ['name', 'role', 'skills', 'greet']
console.log(Object.values(developer)); // ['Alex', 'Senior Engineer', [...], [Function]]
console.log(Object.entries(developer));// Key-value pairs as nested arraysObjects :-Key-value stores representing complex entities and domain models.
