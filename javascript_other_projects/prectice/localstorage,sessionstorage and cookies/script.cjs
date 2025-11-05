// LOCALSTORAGE, SESSIONSTORAGE AND COOKIES
// LocalStorage and SessionStorage are web storage objects that allow you to store key-value pairs in a web browser. The main difference between them is their scope and lifespan:
// LocalStorage: Data stored in LocalStorage has no expiration time. It persists even after the browser is closed and reopened. It is shared across all tabs and windows of the same origin (domain).
// SessionStorage: Data stored in SessionStorage is specific to a single tab or window. It is cleared when the tab or window is closed. Each tab or window has its own separate SessionStorage, even if they are from the same origin.
// Cookies: Cookies are small pieces of data that are stored on the client-side and sent to the server with each HTTP request. They have an expiration date and can be set to persist for a specific duration or until the browser is closed. Cookies are often used for session management, user preferences, and tracking.


// localStorage Example
{
    // Storing data
//   localStorage.setItem('username','furkanmemon')
//   localStorage.setItem('age', 25);
let val= localStorage.getItem("username")
console.log(val);
// localStorage.removeItem("username")
// localStorage.clear() // to clear all local storage
console.log(val);

}                  