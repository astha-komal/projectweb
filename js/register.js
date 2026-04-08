function registerUser() {

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
}