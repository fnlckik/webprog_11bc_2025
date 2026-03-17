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

// 2. Ciklusok
// let: a cikluson belül látható csak
// var: ciklus után is látható
function szamok(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    // console.log(i+1000);
}

// 3. Elágazás
// truthy, falsy
if ("alma") {
    console.log("Gravitáció!");
}
console.clear();

// -------------------------------

// camelCase - JS
// PascalCase - C#
// snake_case - python
// kebab-case - CSS

// 4. duplazoFelezo(n)
// a. páros számok felét adja
// b. páratlan számok dupláját
function duplazoFelezo(n) {
    if (n % 2 === 0) {
        return n / 2;
    } else {
        return n * 2;
    }
}

// 5. osztokSzama(n)
// flatten your code (ne legyen túl mély a kódszerkezet)
// early return: szélsőséges esetek kezelése a függvény elején
function osztokSzama(n) {
    if (parseInt(n) !== n) return;
    let db = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            db++;
        }
    }
    return db;
}

// 6. primE(p)
// Igaz, ha prím. Hamis, ha nem prím.
function primE(p) {
    // if (osztokSzama(Math.abs(p)) === 2) {
    //     return true;
    // }
    // return false;
    // return osztokSzama(Math.abs(p)) === 2;
    let i = 2;
    while (i < p && p % i !== 0) {
        i++;
    }
    // if (i < p) {
    //     return false;
    // } else {
    //     return true;
    // }
    return i >= p;
}