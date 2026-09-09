// Async/Await:-Syntactic sugar over Promises that makes asynchronous code read like clean, sequential synchronous code.
// 11-async-await.js
async function runAuthenticationFlow() {
  try {
    console.log("Starting authentication...");
    const session = await verifyCredentials("valid-token");
    console.log("Auth Success:", session);
  } catch (error) {
    console.error("Auth Failure:", error.message);
  }
}

runAuthenticationFlow();
