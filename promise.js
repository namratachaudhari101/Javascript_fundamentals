A Promise is an object representing the eventual completion or failure of an asynchronous operation, avoiding nested "callback hell."
// 10-promise.js
function verifyCredentials(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "valid-token") {
        resolve({ status: 200, role: "Engineer" });
      } else {
        reject(new Error("Unauthorized: Invalid token"));
      }
    }, 1000);
  });
}

verifyCredentials("valid-token")
  .then((data) => console.log("Promise Resolved:", data))
  .catch((err) => console.error("Promise Rejected:", err.message));
