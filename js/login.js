function loginUser() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;
    if (!username || !password) {
        alert("Please enter both username and password.");
        return false;
    }
    var users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length === 0) {
        alert("No accounts found. Please register first.");
        return false;
    }
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
    sessionStorage.setItem("loggedInUser", matchedUser.username);
    window.location.href = "index.html";
    return false;
}