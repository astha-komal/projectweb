
function loginUser() {

    // (you can add validation here later)

    // ✅ mark user as logged in
    localStorage.setItem("isLoggedIn", "true");

    // ✅ redirect to homepage
    window.location.href = "index.html";

    return false;
}