
let params = new URLSearchParams(window.location.search);
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
}