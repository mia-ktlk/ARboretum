function markerFound(e) {
    console.log(e);
}

function markerLost(e) {
    console.log(e);
}

document.addEventListener("markerFound", markerFound);
document.addEventListener("markerLost", markerLost);