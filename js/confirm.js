

/*let params = new URLSearchParams(window.location.search);
let name = params.get("name");
let age = params.get("age");
let seats = params.get("seats");
let total = params.get("total");
document.getElementById("details").innerHTML =
    "Name: " + name + "<br>" +
    "Age: " + age + "<br>" +
    "Seat No.: " + seats + "<br>" +
    "Total: ₹" + total;
function goToBooking() {
    let params = window.location.search;
    window.location.href = "booking.html" + params;
}*/
/* ===== confirm.js ===== */

window.onload = function () {
    requireLogin();

    var params  = new URLSearchParams(window.location.search);
    var busname = params.get("busname");
    var from    = params.get("from");
    var to      = params.get("to");
    var date    = params.get("date");
    var name    = params.get("name");
    var age     = params.get("age");
    var gender  = params.get("gender");
    var seats   = params.get("seats");
    var total   = params.get("total");

    // Display booking details on screen
    document.getElementById("details").innerHTML =
        "<b>Bus:</b> "        + busname + "<br>" +
        "<b>Route:</b> "      + from + " → " + to + "<br>" +
        "<b>Travel Date:</b> " + date + "<br>" +
        "<b>Seats:</b> "      + seats + "<br>" +
        "<b>Passenger:</b> "  + name + " (Age: " + age + ", " + gender + ")<br>" +
        "<b>Total Paid:</b> ₹" + total;

    // Save booking under the currently logged-in user only
    var currentUser = sessionStorage.getItem("loggedInUser");
    var storageKey  = "bookings_" + currentUser;   // each user has their own key

    var booking = {
        id:        Date.now(),                                    // unique ID
        busname:   busname,
        from:      from,
        to:        to,
        date:      date,
        seats:     seats,
        total:     total,
        passenger: name,
        age:       age,
        gender:    gender,
        bookedOn:  new Date().toLocaleDateString("en-IN")
    };

    var bookings = JSON.parse(localStorage.getItem(storageKey)) || [];
    bookings.push(booking);
    localStorage.setItem(storageKey, JSON.stringify(bookings));
};

function goToBooking() {
    window.location.href = "booking.html";
}

