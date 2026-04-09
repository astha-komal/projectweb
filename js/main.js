/*console.log("Home page loaded");

function validateDate() {
    let selectedDate = document.getElementById("travelDate").value;
    if (!selectedDate) {
        alert("Please select a date");
        return false;
    }
    let current = new Date();
    let input = new Date(selectedDate);
    current.setHours(0,0,0,0);
    input.setHours(0,0,0,0);
    if (input < current) {
        alert("You cannot select a past date!");
        return false;
    }
    return true;
}
function goToBus() {
    if (!validateDate()) return;

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("travelDate").value;
    window.location.href =
        `bus_page.html?from=${from}&to=${to}&date=${date}`;
}*/
/* ===== main.js ===== */

window.onload = function () {
    requireLogin();   // kick out if not logged in
    updateNavBar();   // show Login or Logout in nav

    // Set today as minimum selectable date
    var today = new Date().toISOString().split("T")[0];
    document.getElementById("travelDate").min = today;
};

function validateDate() {
    var selectedDate = document.getElementById("travelDate").value;
    if (!selectedDate) {
        alert("Please select a travel date.");
        return false;
    }
    var current = new Date();
    var input   = new Date(selectedDate);
    current.setHours(0, 0, 0, 0);
    input.setHours(0, 0, 0, 0);
    if (input < current) {
        alert("You cannot select a past date!");
        return false;
    }
    return true;
}

function goToBus() {
    var from = document.getElementById("from").value.trim();
    var to   = document.getElementById("to").value.trim();

    if (!from || !to) {
        alert("Please enter From and To cities.");
        return;
    }
    if (from.toLowerCase() === to.toLowerCase()) {
        alert("From and To cities cannot be the same.");
        return;
    }
    if (!validateDate()) return;

    var date = document.getElementById("travelDate").value;
    window.location.href = "bus_page.html?from=" + encodeURIComponent(from) +
                           "&to="   + encodeURIComponent(to) +
                           "&date=" + encodeURIComponent(date);
}
