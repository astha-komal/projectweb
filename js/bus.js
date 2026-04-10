

window.onload = function () {
    requireLogin();

    var params    = new URLSearchParams(window.location.search);
    var fromPlace = params.get("from");
    var toPlace   = params.get("to");
    var date      = params.get("date");

    document.getElementById("routeInfo").innerText =
        fromPlace + " → " + toPlace + "   |   Date: " + date;

    var buses = [
        { from: "Vellore",    to: "Chennai",    name: "Express Travels",  time: "6:00 AM",   price: 250 },
        { from: "Vellore",    to: "Chennai",    name: "City Rider",       time: "10:00 AM",  price: 300 },
        { from: "Vellore",    to: "Chennai",    name: "Super Deluxe",     time: "4:00 PM",   price: 350 },
        { from: "Vellore",    to: "Bangalore",  name: "Green Line",       time: "7:00 AM",   price: 400 },
        { from: "Vellore",    to: "Bangalore",  name: "Fast Wheels",      time: "1:00 PM",   price: 450 },
        { from: "Vellore",    to: "Bangalore",  name: "Royal Travels",    time: "8:00 PM",   price: 500 },
        { from: "Vellore",    to: "Tirupati",   name: "Balaji Travels",   time: "5:00 AM",   price: 200 },
        { from: "Vellore",    to: "Tirupati",   name: "Temple Express",   time: "11:00 AM",  price: 220 },
        { from: "Vellore",    to: "Tirupati",   name: "Divine Travels",   time: "6:00 PM",   price: 250 },
        { from: "Chennai",    to: "Hyderabad",  name: "Royal Travels",    time: "8:00 PM",   price: 900 },
        { from: "Chennai",    to: "Bangalore",  name: "Fast Wheels",      time: "9:00 AM",   price: 350 },
        { from: "Chennai",    to: "Coimbatore", name: "Sky Travels",      time: "10:00 PM",  price: 700 },
        { from: "Bangalore",  to: "Mysore",     name: "Orange Bus",       time: "6:00 AM",   price: 250 },
        { from: "Bangalore",  to: "Chennai",    name: "Southern Star",    time: "5:00 PM",   price: 550 },
        { from: "Hyderabad",  to: "Bangalore",  name: "Deccan Express",   time: "7:30 AM",   price: 600 }
    ];

    var container     = document.getElementById("busContainer");
    var filteredBuses = buses.filter(function (bus) {
        return bus.from.toLowerCase() === fromPlace.toLowerCase()
            && bus.to.toLowerCase()   === toPlace.toLowerCase();
    });

    if (filteredBuses.length === 0) {
        container.innerHTML = "<p class='no-bus'>No buses found for this route.</p>";
        return;
    }

    for (var i = 0; i < filteredBuses.length; i++) {
        var bus  = filteredBuses[i];
        var card = document.createElement("div");
        card.className = "bus-card";
        card.innerHTML =
            "<h3>" + bus.name + "</h3>" +
            "<p>Route: " + bus.from + " → " + bus.to + "</p>" +
            "<p>Departure: " + bus.time + "</p>" +
            "<p>Date: " + date + "</p>" +
            "<p>Price: ₹" + bus.price + " per seat</p>" +
            "<button class='btn' onclick=\"goToSeat('" + bus.name + "','" +
                bus.from + "','" + bus.to + "'," + bus.price + ",'" + date + "')\">Select Seat</button>";
        container.appendChild(card);
    }
};

function goToSeat(name, from, to, price, date) {
    window.location.href =
        "seat.html?name="  + encodeURIComponent(name)  +
        "&from=" + encodeURIComponent(from)  +
        "&to="   + encodeURIComponent(to)    +
        "&price=" + price +
        "&date=" + encodeURIComponent(date);
}