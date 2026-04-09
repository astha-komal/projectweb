
/*let params = new URLSearchParams(window.location.search);
let seats = params.get("seats");
let total = params.get("total");
window.onload = function(){
    let info = document.createElement("h3");
    info.innerText = "Seats: " + seats + " | Total: ₹" + total;
    document.querySelector(".main").prepend(info);
};

function goToConfirm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!name || !age || !gender) {
        alert("Please fill all details");
        return false;
    }
    let params = new URLSearchParams(window.location.search);
    let from = params.get("from");
    let to = params.get("to");
    let date = params.get("date");

    window.location.href =
        `confirm.html?from=${from}&to=${to}&date=${date}&name=${name}&age=${age}&gender=${gender.value}&seats=${seats}&total=${total}`;

    return false;
}*/
/* ===== passenger.js ===== */

var params     = new URLSearchParams(window.location.search);
var seats      = params.get("seats");
var total      = params.get("total");
var busName    = params.get("busname");
var fromPlace  = params.get("from");
var toPlace    = params.get("to");
var travelDate = params.get("date");
var price      = params.get("price");

window.onload = function () {
    requireLogin();

    // Show trip summary at the top of the form
    var info = document.createElement("h3");
    info.style.color = "rgb(244, 92, 92)";
    info.innerText =
        busName + "  |  " + fromPlace + " → " + toPlace +
        "  |  Date: " + travelDate +
        "  |  Seats: " + seats +
        "  |  Total: ₹" + total;
    document.querySelector(".main").prepend(info);
};

function goToConfirm() {
    var name   = document.getElementById("name").value.trim();
    var age    = document.getElementById("age").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');

    if (!name || !age || !gender) {
        alert("Please fill all passenger details and select a gender.");
        return false;
    }
    if (parseInt(age) < 1 || parseInt(age) > 120) {
        alert("Please enter a valid age between 1 and 120.");
        return false;
    }

    window.location.href =
        "confirm.html?" +
        "busname=" + encodeURIComponent(busName)     +
        "&from="   + encodeURIComponent(fromPlace)   +
        "&to="     + encodeURIComponent(toPlace)     +
        "&date="   + encodeURIComponent(travelDate)  +
        "&name="   + encodeURIComponent(name)        +
        "&age="    + encodeURIComponent(age)         +
        "&gender=" + encodeURIComponent(gender.value)+
        "&seats="  + encodeURIComponent(seats)       +
        "&total="  + encodeURIComponent(total)       +
        "&price="  + encodeURIComponent(price);

    return false;
}