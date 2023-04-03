"use strict";
const response = await fetch("bestellingen/aantal");
if (response.ok) {
    const aantalBestellingen = await response.text();
    document.getElementById("aantal").innerText = aantalBestellingen;
} else {
    alert("Technische storing");
}