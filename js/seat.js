
let params = new URLSearchParams(window.location.search);
let busName = params.get("name");
let fromPlace = params.get("from");
let toPlace = params.get("to");
let ticketPrice = parseInt(params.get("price"));
document.getElementById("busInfo").innerText =
    busName + " | " + fromPlace + " → " + toPlace +
    " | Price: ₹" + ticketPrice;

let seatContainer = document.getElementById("seatContainer");
let selectedSeatsDisplay = document.getElementById("selectedSeats");
let totalPriceDisplay = document.getElementById("totalPrice");
let selectedSeats = [];
let totalSeats = 40;
let seatsPerRow = 4;
let seatNumber = 1;
for(let i = 0; i < totalSeats / seatsPerRow; i++) {

    let row = document.createElement("div");
    row.className = "row";

    for(let j = 0; j < seatsPerRow; j++) {
        if(j === 2) {
            let aisle = document.createElement("span");
            aisle.className = "aisle";
            row.appendChild(aisle);
        }
        let seat = document.createElement("div");
        seat.className = "seat";
        seat.textContent = seatNumber;
        seat.addEventListener("click", function() {
            seat.classList.toggle("selected");
            if(selectedSeats.includes(seat.textContent)) {
                selectedSeats = selectedSeats.filter(function(s) {
                    return s !== seat.textContent;
                });
            } else {
                selectedSeats.push(seat.textContent);
            }
            updateSummary();
        });
        row.appendChild(seat);
        seatNumber++;
    }
    seatContainer.appendChild(row);
}
function updateSummary() {
    if(selectedSeats.length === 0) {
        selectedSeatsDisplay.textContent = "None";
    } else {
        selectedSeatsDisplay.textContent = selectedSeats.join(", ");
    }
    totalPriceDisplay.textContent = selectedSeats.length * ticketPrice;
}
function confirmBooking() {
    if(selectedSeats.length === 0) {
        alert("Please select at least one seat!");
        return;
    }
    let seats = selectedSeats.join(",");
    let total = selectedSeats.length * ticketPrice;
    window.location.href =
        `passenger.html?seats=${seats}&total=${total}`;
let booking = {
        bus: busName,
        from: from,
        to: to,
        price: price,
        date: new Date().toLocaleDateString(),
        seats: selectedSeats
    };
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    window.location.href = "bookings.html";
}
