
function isLoggedIn() {
    return sessionStorage.getItem("loggedInUser") !== null;
}
function getCurrentUser() {
    var username = sessionStorage.getItem("loggedInUser");
    if (!username) return null;
    var users = JSON.parse(localStorage.getItem("users")) || [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username) return users[i];
    }
    return null;
}
function requireLogin() {
    if (!isLoggedIn()) {
        alert("Please login to continue.");
        window.location.href = "login.html";
    }
}
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
function logoutUser() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}