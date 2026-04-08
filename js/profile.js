let user = JSON.parse(localStorage.getItem("user"));

if (user) {
    document.getElementById("p-username").textContent = user.username;
    document.getElementById("p-email").textContent = user.email;
}