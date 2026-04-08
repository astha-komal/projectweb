console.log("Home page loaded");

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
}
