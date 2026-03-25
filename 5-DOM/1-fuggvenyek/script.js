// Függvények
const atlag = (a, b) => osszeadas(a, b) / 2;

function osszeg(a, b) {
    return a + b;
}

// Anonymous function
// A JS nyelvben a "function" egy típus.
const szum = function (a, b) {
    return a + b;
}

// Arrow function (nyíl függvény)
// Ha a függvény törzse egyetlen utasítás,
// akkor megadható nyíl függvényként.
const osszeadas = (a, b) => a + b;

// Kitekintés
const a = [1, 5, -2, 7, 8, 3, -6];
function kivalogatPozitiv(x) {
    const eredmeny = [];
    for (const elem of x) {
        if (elem > 0) {
            eredmeny.push(elem);
        }
    }
    return eredmeny;
}

function kivalogatParos(x) {
    const eredmeny = [];
    for (const elem of x) {
        if (elem % 2 === 0) {
            eredmeny.push(elem);
        }
    }
    return eredmeny;
}

// Matek: x -> x^2
const pozitivE = e => e > 0;
const parosE = e => e % 2 === 0;

// Callback function: adunk egy függvényt
// paraméterként egy másik függvénynek, hogy
// azt hívja meg.
function kivalogat(x, T) {
    const eredmeny = [];
    for (const elem of x) {
        if (T(elem)) {
            eredmeny.push(elem);
        }
    }
    return eredmeny;
}
// kivalogat(a, pozitivE);