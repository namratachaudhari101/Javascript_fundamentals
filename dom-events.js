// DOM Manipulation & Event Handling
// The Document Object Model (DOM) is a tree-like representation of HTML on a webpage that JavaScript can dynamically inspect and modify.
// For these check html file first 

  // 08-dom-events.js

// 1. Selecting Elements
const titleElement = document.getElementById("title");
const button = document.querySelector("#actionBtn");
const list = document.querySelector("#itemList");

// 2. Modifying Content & Styles
titleElement.textContent = "JavaScript DOM Updated";
titleElement.style.color = "#007acc";

// 3. Creating & Appending Elements
function addItem(text) {
  const newItem = document.createElement("li");
  newItem.textContent = text;
  list.appendChild(newItem);
}

// 4. Event Handling (addEventListener)
button.addEventListener("click", () => {
  addItem(`Item added at ${new Date().toLocaleTimeString()}`);
});
