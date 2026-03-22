// F2
function terulet(a, b) {
    let terulet = a * b;
    if (isNaN(terulet) || terulet < 0) {
        terulet = 0;
    }
    return terulet;
}

// F3
function negyzetosszeg(n) {
    if (parseInt(n) !== n) {
        return;
    }
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i*i;
    }
    return s;
}

// F4
let szamok = [5, 12, 2, 7, -8, 2, 3];
function parosPozitivakSzama(x) {
    let db = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0 && x[i] > 0) {
            db++;
        }
    }
    return db;
}

// F5
function kisebbek(x, k) {
    let eredmeny = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] < k) {
            eredmeny.push(x[i]);
        }
    }
    return eredmeny;
}

// F6
function vanPozitiv(x) {
    let i = 0;
    while (i < x.length && !(x[i] > 0)) {
        i++;
    }
    return i < x.length;
}

// F7
function fordito() {
    const s = prompt("Megadott szó:");
    let forditott = "";
    for (let i = s.length-1; i >= 0; i--) {
        forditott += s[i];
    }
    console.log(forditott);
}

// F8 - Bónusz
function valtozatlan(x) {
    let i = 0;
    while (i < x.length && !(typeof(x[i]) !== "number")) {
        i++;
    }
    if (i < x.length) {
        return;
    }
    
    let mine = x[0];
    let maxe = x[0];
    for (let i = 1; i < x.length; i++) {
        if (x[i] > maxe) {
            maxe = x[i];
        } else if (x[i] < mine) {
            mine = x[i];
        }
    }

    // if (parseInt(mine) !== mine && mine > 0) {
    //     mine = parseInt(mine) + 1;
    // } else if (parseInt(mine) !== mine) {
    //     mine = parseInt(mine);
    // }
    // if (parseInt(maxe) !== maxe && maxe > 0) {
    //     maxe = parseInt(maxe);
    // } else if (parseInt(maxe) !== maxe) {
    //     maxe = parseInt(maxe) - 1;
    // }
    mine = Math.ceil(mine);
    maxe = Math.floor(maxe);
    // console.log(mine, maxe);
    return maxe - mine + 1;
}