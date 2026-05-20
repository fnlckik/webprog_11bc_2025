
// e: event (ami bekövetkezett)
// event.target: eseményt kiváltó objektum
function handleBackground(e) {
    const input = e.target; // Melyik radio gombra kattintottunk?
    document.body.style.backgroundColor = input.value;
}

// Hozzárendeljük az eseményhez az eseménykezelőt!
// Kattintás hatására fusson le a handleBackground függvény!
const radioButtons = document.querySelectorAll("input[name='szin']");
for (const btn of radioButtons) {
    // btn.onclick = handleBackground;
    btn.addEventListener("click", handleBackground);
}

// 1. Mi reagál az eseményre? -> radioButtons
// 2. Milyen eseményre reagál? -> "click"
// 3. Hogyan reagál? -> handleBackground

const colorInput = document.querySelector("input[type='color']");
colorInput.addEventListener("change", handleBackground); // "input"