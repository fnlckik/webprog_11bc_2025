

// Mi történjen? => eseménykezelő függvény
// event loop (eseményeket figyelő végtelen ciklus)
function handleCalc() {
    // Beolvasás
    const input = document.querySelector("input[type='number']");
    const r = parseFloat(input.value); // !!!

    // Feldolgozás
    const t = r*r*Math.PI;

    // Kiírás
    const span = document.querySelector("#terulet");
    if (!t) {
        span.innerText = "Nem számot adott meg!";
    } else {
        span.innerText = t.toFixed(2);
    }
}