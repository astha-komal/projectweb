/*function registerUser() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // save user data
    let user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    // mark user as logged in
    localStorage.setItem("isLoggedIn", "true");

    // redirect to home
    window.location.href = "index.html";

    return false;
}*/
/* ===== register.js ===== */

function registerUser() {
    var username = document.getElementById("username").value.trim();
    var email    = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Please fill all fields.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    // Load existing users array (supports multiple users)
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already taken
    for (var i = 0; i < users.length; i++) {
        if (users[i].username.toLowerCase() === username.toLowerCase()) {
            alert("Username already taken. Please choose a different one.");
            return false;
        }
    }

    // Check if email already registered
    for (var j = 0; j < users.length; j++) {
        if (users[j].email.toLowerCase() === email.toLowerCase()) {
            alert("This email is already registered. Please login.");
            return false;
        }
    }

    // Add new user to array
    users.push({ username: username, email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    window.location.href = "login.html";
    return false;
}