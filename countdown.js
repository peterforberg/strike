// Set your target event time in UTC
const targetUTC = "2025-03-01T18:00:00Z"; // example
const target = new Date(targetUTC);

function updateCountdown() {
const now = new Date();
const diff = target - now;

if (diff <= 0) {
    document.getElementById("countdown").textContent = "Event has started!";
    return;
}

const days = Math.floor(diff / (1000*60*60*24));
const hours = Math.floor((diff / (1000*60*60)) % 24);
const minutes = Math.floor((diff / 1000/60) % 60);
const seconds = Math.floor((diff / 1000) % 60);

document.getElementById("countdown").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);