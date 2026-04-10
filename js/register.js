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
    var users = JSON.parse(localStorage.getItem("users")) || [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].username.toLowerCase() === username.toLowerCase()) {
            alert("Username already taken. Please choose a different one.");
            return false;
        }
    }
    for (var j = 0; j < users.length; j++) {
        if (users[j].email.toLowerCase() === email.toLowerCase()) {
            alert("This email is already registered. Please login.");
            return false;
        }
    }
    users.push({ username: username, email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    window.location.href = "login.html";
    return false;
}