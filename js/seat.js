var params      = new URLSearchParams(window.location.search);
var busName     = params.get("name");
var fromPlace   = params.get("from");
var toPlace     = params.get("to");
var ticketPrice = parseInt(params.get("price"));
var travelDate  = params.get("date");
var selectedSeats = [];
window.onload = function () {
    requireLogin();
    document.getElementById("busInfo").innerText =
        busName + "  |  " + fromPlace + " → " + toPlace +
        "  |  Date: " + travelDate +
        "  |  ₹" + ticketPrice + " per seat";

    buildSeats();
};
function buildSeats() {
    var seatContainer = document.getElementById("seatContainer");
    var totalSeats    = 40;
    var seatsPerRow   = 4;
    var seatNumber    = 1;
    for (var i = 0; i < totalSeats / seatsPerRow; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for (var j = 0; j < seatsPerRow; j++) {
            if (j === 2) {
                var aisle = document.createElement("span");
                aisle.className = "aisle";
                row.appendChild(aisle);
            }
            var seat = document.createElement("div");
            seat.className = "seat";
            seat.textContent = seatNumber;
            (function (s) {
                s.addEventListener("click", function () {
                    s.classList.toggle("selected");
                    var num = s.textContent;
                    if (selectedSeats.indexOf(num) >= 0) {
                        selectedSeats = selectedSeats.filter(function (x) { return x !== num; });
                    } else {
                        selectedSeats.push(num);
                    }
                    updateSummary();
                });
            })(seat);

            row.appendChild(seat);
            seatNumber++;
        }
        seatContainer.appendChild(row);
    }
}
function updateSummary() {
    document.getElementById("selectedSeats").textContent =
        selectedSeats.length === 0 ? "None" : selectedSeats.join(", ");
    document.getElementById("totalPrice").textContent =
        selectedSeats.length * ticketPrice;
}
function confirmBooking() {
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat!");
        return;
    }
    var total = selectedSeats.length * ticketPrice;
    window.location.href =
        "passenger.html?seats="  + encodeURIComponent(selectedSeats.join(",")) +
        "&total="   + total +
        "&busname=" + encodeURIComponent(busName) +
        "&from="    + encodeURIComponent(fromPlace) +
        "&to="      + encodeURIComponent(toPlace) +
        "&date="    + encodeURIComponent(travelDate) +
        "&price="   + ticketPrice;
}
