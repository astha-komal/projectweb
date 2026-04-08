// check login status
let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    window.location.href = "login.html";
}