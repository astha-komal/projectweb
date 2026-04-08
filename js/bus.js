let params = new URLSearchParams(window.location.search);
let fromPlace = params.get("from");
let toPlace = params.get("to");
let date = params.get("date");
document.getElementById("routeInfo").innerText =
    fromPlace + " → " + toPlace;
let buses = [
    { from:"Vellore", to:"Chennai", name:"Express Travels", time:"6:00 AM", price:250 },
    { from:"Vellore", to:"Chennai", name:"City Rider", time:"10:00 AM", price:300 },
    { from:"Vellore", to:"Chennai", name:"Super Deluxe", time:"4:00 PM", price:350 },

    { from:"Vellore", to:"Bangalore", name:"Green Line", time:"7:00 AM", price:400 },
    { from:"Vellore", to:"Bangalore", name:"Fast Wheels", time:"1:00 PM", price:450 },
    { from:"Vellore", to:"Bangalore", name:"Royal Travels", time:"8:00 PM", price:500 },

    { from:"Vellore", to:"Tirupati", name:"Balaji Travels", time:"5:00 AM", price:200 },
    { from:"Vellore", to:"Tirupati", name:"Temple Express", time:"11:00 AM", price:220 },
    { from:"Vellore", to:"Tirupati", name:"Divine Travels", time:"6:00 PM", price:250 },
    
    {name: "Green Line",from: "Vellore",to: "Bangalore",time: "7:00 AM",price: 400},
    {name: "Fast Wheels", from: "Vellore",to: "Chennai",time: "9:00 AM", price: 350 },
    { name: "Royal Travels",from: "Chennai", to: "Hyderabad", time: "8:00 PM",price: 900},
    {name: "Orange Bus",from: "Bangalore",to: "Mysore",time: "6:00 AM",price: 250},
    {name: "Sky Travels",from: "Chennai",to: "Coimbatore", time: "10:00 PM",price: 700}

];
let container = document.getElementById("busContainer");
let filteredBuses = buses.filter(function(bus){
    return bus.from.toLowerCase() === fromPlace.toLowerCase()
        && bus.to.toLowerCase() === toPlace.toLowerCase();
});
if(filteredBuses.length === 0){
    container.innerHTML = "<p class='no-bus'>No buses available for selected route.</p>";
}
filteredBuses.forEach(function(bus){
let card = document.createElement("div");
    card.className = "bus-card";
    card.innerHTML = `
        <h3>${bus.name}</h3>
        <p>Route: ${bus.from} → ${bus.to}</p>
        <p>Departure: ${bus.time}</p>
        <p>Price: ₹${bus.price}</p>
        <button class="btn" onclick="goToSeat('${bus.name}', '${bus.from}', '${bus.to}', '${bus.price}')">
    Select Seat
</button>
    `;

    container.appendChild(card);
});
function goToSeat(name, from, to, price){

    window.location.href =
        "seat.html?name=" + encodeURIComponent(name) +
        "&from=" + encodeURIComponent(from) +
        "&to=" + encodeURIComponent(to) +
        "&price=" + encodeURIComponent(price);
}