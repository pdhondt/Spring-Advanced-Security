"use strict";
const response = await fetch("werknemers/aantal");
if (response.ok) {
    const aantalWerknemers = await response.text();
    document.getElementById("aantal").innerText = aantalWerknemers;
} else {
    alert("Technische storing");
}