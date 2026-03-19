// Tömb (JS) - List (python)
// 1. Méretezhető
// 2. Indexelés 0-tól.
// 3. Többféle típusú elem is lehet. (felesleges)

// let t = [5, "alma", 9, -5, NaN, false];
// Hézagos tömb
// let s = [5, 2, 3, , , , 7];

const a = [7, 2, -3, 1, 0, 5, 2];
a.push(1);
console.log("Tömb:", a); // [7, 2, -3, 8, 0, 5, 2, 1]
console.log("Tömb hossza:", a.length);

const b = [2, 5, , , , 7];
console.log("Hézagos tömb:", b);
console.log("Hézagos tömb hossza:", b.length);
b[100] = 404;
console.log("Új hossz:", b.length);
console.clear();

// -----------------------------------

// 1. Megszámolás: Hány nemnulla elem van?
// Hézagos tömbre működjön!
function nemnullaKlasszikus(x) {
    let db = 0;
    for (let i = 0; i < x.length; i++) {
        // x[i]
        // Ha nem undefined és nem nulla elem.
        // Ha x[i] létezik!
        if (x[i] !== undefined && x[i] !== 0) {
            db++;
        }
    }
    return db;
}

// for-of ciklus: bejárós ciklus
// Ne adj a tömbhöz elemeket!
// Ne módosíts elemeket!
function nemnulla(x) {
    let db = 0;
    for (const elem of x) {
        if (elem !== undefined && elem !== 0) {
            db++;
        }
    }
    return db;
}

// 2. Eldöntés: van-e negatív elem?
// nem(T(x[i])) === !(x[i] < 0)
// x[i] === undefined || x[i] >= 0
// Ciklus amíg (i < n és nem(T(x[i])))
function vanNegativ(x) {
    let i = 0;
    while (i < x.length && !(x[i] < 0)) {
        i++;
    }
    return i < x.length;
}

// 3. Min/Max kiválasztás: legnagyobb elem
function legnagyobbKlasszikus(x) {
    let maxi = 0;
    for (let i = 1; i < x.length; i++) {
        if (x[i] > x[maxi]) {
            maxi = i;
        }
    }
    return x[maxi];
}

function legnagyobb(x) {
    let maxe = -Infinity;
    for (const elem of x) {
        if (elem > maxe) {
            maxe = elem;
        }
    }
    return maxe;
}

// 4. Kiválogatás: páratlanok
// Új tömböt adunk meg a T tulajdonságú elemekkel.
// elem !== undefined && elem % 2 !== 0
function paratlanok(x) {
    const y = [];
    for (const elem of x) {
        if (Math.abs(elem % 2) === 1) {
            y.push(elem);
        }
    }
    return y;
}

// 5. Összegzés: 
// Az x tömbben adjuk meg a szorzatát
// az a és b közötti (határokat is beleértve) értékeknek!
// szoroz([2, 5, 3, 1, 1, 4, 5, 9], 2, 4) === 24 
// Megjegyzés: 2*3*4
function osszeg(x) {
    let s = 0;
    for (const elem of x) {
        if (elem !== undefined) {
            s += elem;
        }
    }
    return s;
}

function szoroz(x, a, b) {
    let szorzat = 1;
    for (const elem of x) {
        if (elem >= a && elem <= b) {
            szorzat *= elem;
        }
    }
    return szorzat;
}

// 6. Keresés:
// paritas([7, 2, -3, 8, 0, 5, 2]) === [8, 0]
// paritas([]) === []
// paritás: párosság
// Van-e két egymás melletti azonos paritású elem?
// Ha igen, adjuk meg az első ilyen elempárt (tömb).
// Ha nincs, adjunk [].
function paritas(x) {
    let i = 0;
    while (i < x.length-1 && !(Math.abs(x[i] % 2) === Math.abs(x[i+1]) % 2)) {
        i++;
    }
    // return i < x.length-1 ? [x[i], x[i+1]] : [];
    if (i < x.length-1) {
        return [x[i], x[i+1]];
    } else {
        return [];
    }
}