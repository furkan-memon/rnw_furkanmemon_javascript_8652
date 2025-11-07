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
{
    // SessionStorage Example
    // Storing data
    sessionStorage.setItem('sessionUser', 'furkanmemon');
    sessionStorage.setItem('sessionAge', 25);
    let sessionVal = sessionStorage.getItem("sessionUser");
    console.log(sessionVal);
    // sessionStorage.removeItem("sessionUser")
    // sessionStorage.clear() // to clear all session storage
    console.log(sessionVal);
}
{
    localStorage.setItem("num",JSON.stringify([1,2,3,4,5]))
}
{
   
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  document.body.classList.toggle('light', theme === 'light');
  localStorage.setItem('theme', theme);
}

function getSystemTheme() {
  return prefersDark.matches ? 'dark' : 'light';
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme || getSystemTheme());
}

prefersDark.addEventListener('change', () => {
  if (!localStorage.getItem('theme')) applyTheme(getSystemTheme());
});

document.getElementById('toggleTheme').addEventListener('click', () => {
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(newTheme);
});

initTheme();


}
