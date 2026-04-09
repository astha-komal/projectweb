
/*function loginUser() {

    // (you can add validation here later)

    // ✅ mark user as logged in
    localStorage.setItem("isLoggedIn", "true");

    // ✅ redirect to homepage
    window.location.href = "index.html";

    return false;
}*/
/* ===== login.js ===== */

function loginUser() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return false;
    }

    // Load all registered users
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // If no users have registered at all
    if (users.length === 0) {
        alert("No accounts found. Please register first.");
        return false;
    }

    // Find user with matching username AND password
    var matchedUser = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            matchedUser = users[i];
            break;
        }
    }

    if (!matchedUser) {
        alert("Incorrect username or password.\nIf you don't have an account, please register first.");
        return false;
    }

    // Save logged-in username to sessionStorage
    // sessionStorage expires when browser tab closes (safer than localStorage)
    sessionStorage.setItem("loggedInUser", matchedUser.username);

    window.location.href = "index.html";
    return false;
}