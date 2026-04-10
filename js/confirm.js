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
    document.getElementById("details").innerHTML =
        "<b>Bus:</b> "        + busname + "<br>" +
        "<b>Route:</b> "      + from + " → " + to + "<br>" +
        "<b>Travel Date:</b> " + date + "<br>" +
        "<b>Seats:</b> "      + seats + "<br>" +
        "<b>Passenger:</b> "  + name + " (Age: " + age + ", " + gender + ")<br>" +
        "<b>Total Paid:</b> ₹" + total;
    var currentUser = sessionStorage.getItem("loggedInUser");
    var storageKey  = "bookings_" + currentUser;  
    var booking = {
        id:        Date.now(),                                 
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

