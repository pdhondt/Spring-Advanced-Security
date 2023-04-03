"use strict";
const response = await fetch("principal")
if (response.ok) {
    const userName = await response.text();
    document.getElementById("userName").innerText = userName;
} else {
    alert("Technische storing");
}