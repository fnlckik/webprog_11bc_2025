// F2
// let diff;
// if (a > b) diff = a - b;
// else diff = b - a;
function elteres(a, b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") return;
    const diff = Math.abs(b - a);
    if (isNaN(diff)) return;
    return diff;
}

// F3
function tobbszorosok(k) {
    const t = [];
    for (let i = 1; i <= 100; i++) {
        if (i % k === 0) {
            t.push(i);
        }
    }
    return t;
}

// F4
function osszeg(t) {
    let s = 0;
    for (const e of t) {
        if (e > 0) {
            s += e;
        }
    }
    return s;
}

// F5
function leghosszabb(t) {
    let max = "";
    for (const e of t) {
        if (e !== undefined && e.length > max.length) {
            max = e;
        }
    }
    return max;
}

// F6
// Félig kiindexelés fél pont (most).
// Kriszti, Balázs !!!
function vanMagas(t) {
    let i = 1;
    while (i < t.length-1 && !(t[i] > t[i-1] && t[i] > t[i+1])) {
        i++;
    }
    return i < t.length-1;
}

// F7 - Bónusz
function haromszog(a, b, c) {
    if (a + b <= c || b + c <= a || c + a <= b) {
        console.log("Nem háromszög!");
        return;
    }
    // Oldjuk meg, hogy c legyen a legnagyobb oldal.
    if (a > c) [a, c] = [c, a];
    if (b > c) [b, c] = [c, b];
    cosgamma = (a*a + b*b - c*c) / (2*a*b);
    if (cosgamma > 0) {
        console.log("Hegyesszögű!");
    } else if (cosgamma < 0) {
        console.log("Tompaszögű!");
    } else {
        console.log("Derékszögű!");
    }
}
