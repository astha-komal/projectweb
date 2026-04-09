// check login status
/*let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    window.location.href = "login.html";
}*/
/* ===== auth.js =====
   Include this on EVERY page before other scripts.
   It handles login checks, getting current user, and logout.
*/

// Returns true if someone is logged in this session
function isLoggedIn() {
    return sessionStorage.getItem("loggedInUser") !== null;
}

// Returns the full user object of whoever is logged in, or null
function getCurrentUser() {
    var username = sessionStorage.getItem("loggedInUser");
    if (!username) return null;
    var users = JSON.parse(localStorage.getItem("users")) || [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username) return users[i];
    }
    return null;
}

// Call on protected pages — redirects to login if not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        alert("Please login to continue.");
        window.location.href = "login.html";
    }
}

// Shows Logout in nav if logged in, shows Login if not
function updateNavBar() {
    var loginLink   = document.getElementById("nav-login");
    var logoutLink  = document.getElementById("nav-logout");
    var profileLink = document.getElementById("nav-profile");

    if (isLoggedIn()) {
        if (loginLink)   loginLink.style.display   = "none";
        if (logoutLink)  logoutLink.style.display  = "inline";
        if (profileLink) profileLink.style.display = "inline";
    } else {
        if (loginLink)   loginLink.style.display   = "inline";
        if (logoutLink)  logoutLink.style.display  = "none";
        if (profileLink) profileLink.style.display = "none";
    }
}

// Logs the user out and sends them to login page
function logoutUser() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}