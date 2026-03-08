// Vezérlési szerkezetek
// elágazás, ciklus, függvény

// 1. Függvények
// atlag(2, 3, "alma") === 2.5
// atlag(2) === NaN
function atlag(a, b) {
    return (a + b) / 2;
}

// Későbbi hívódik meg!
function atlag(a, b, c) {
    return (a + b + c) / 3;
}