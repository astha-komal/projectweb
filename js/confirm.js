/*let params = new URLSearchParams(window.location.search);

let name = params.get("name");
let age = params.get("age");
let seats = params.get("seats");
let total = params.get("total");

document.getElementById("details").innerHTML =
    "Name: " + name + "<br>" +
    "Age: " + age + "<br>" +
    "Seats: " + seats + "<br>" +
    "Total: ₹" + total;


function goToBooking() {
    
     let params = window.location.search;

    // pass all data to booking page
    window.location.href = "booking.html" + params;
    
}*/

let params = new URLSearchParams(window.location.search);
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
}

