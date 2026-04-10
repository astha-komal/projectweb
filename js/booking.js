
window.onload = function () {
    requireLogin();
    updateNavBar();
    var currentUser = sessionStorage.getItem("loggedInUser");
    var storageKey  = "bookings_" + currentUser;
    var bookings    = JSON.parse(localStorage.getItem(storageKey)) || [];
    document.getElementById("bookingsTitle").innerText =
        "My Bookings — " + currentUser;
    var container = document.getElementById("bookingsContainer");
    if (bookings.length === 0) {
        container.innerHTML =
            "<p class='no-bookings'>You have no bookings yet.<br>" +
            "<a href='index.html'>Book a ticket now →</a></p>";
        return;
    }
    var reversed = bookings.slice().reverse();
    for (var i = 0; i < reversed.length; i++) {
        var b    = reversed[i];
        var card = document.createElement("div");
        card.className = "booking-card";
        card.innerHTML =
            "<h3> " + b.busname + "</h3>" +
            "<p><b>Route:</b> "        + b.from + " → " + b.to + "</p>" +
            "<p><b>Travel Date:</b> "  + b.date + "</p>" +
            "<p><b>Seats:</b> "        + b.seats + "</p>" +
            "<p><b>Passenger:</b> "    + b.passenger +
                " (Age: " + b.age + ", " + b.gender + ")</p>" +
            "<p><b>Total Paid:</b> Rs"  + b.total + "</p>" +
            "<p><b>Booked On:</b> "    + b.bookedOn + "</p>" +
            "<p class='status confirmed'> Confirmed</p>";
        container.appendChild(card);
    }
};
