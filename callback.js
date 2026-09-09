// A callback is a function passed into another function to be executed after an operation completes.
// 09-callback.js
function fetchUserData(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, username: "dev_user" };
    callback(user);
  }, 1000);
}

fetchUserData(101, (user) => {
  console.log("User retrieved via Callback:", user);
});
