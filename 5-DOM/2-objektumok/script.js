// 1. Objektum, adattagok (tulajdonságok)
// Név:Érték párok
// Milyen tulajdonságai vannak egy embernek?
const diak = {
    nev: "Marci",
    kor: 17,
    osztondijasE: true,
    hobbik: ["edzés", "videójáték", "sütés"]
};

// Név lekérése:
// console.log(diak.nev);
// Az 1. hobbi lekérése:
// console.log(diak.hobbik[0]);

// 2. Objektum, metódusok (függvény)
// Mit tud csinálni egy kutya?
// this: a most definiált objektumra vonatkozik
const kutya = {
    nev: "Morzsi",
    tomeg: 7.8,
    ugat: function () {
        return "Woof!";
    },
    eszik: function (m) {
        return this.tomeg += m; // új tömeggel térjünk vissza
    },
    magassag: undefined
};

// Honnan tudjuk, hogy van-e egy adott adattag?
console.log(kutya.hasOwnProperty("magassag")); // true
console.log(kutya.hasOwnProperty("length")); // false
console.clear();

kutya.faj = "Bernáthegyi";

diak.bemutatkozik = function () {
    // return this.nev + " vagyok, " + this.kor + " éves.";
    return `${this.nev} vagyok, ${this.kor} éves.`; // template literal
}

// 3. Egymásba egyázott objektumok
const ember_sima = {
    nev: "Robi",
    auto: "BMW"
};

const ember = {
    nev: "Robi",
    kor: 65,
    auto: {
        marka: "BMW",
        szin: "piros",
        evjarat: 2015,
        km: 561.32
    }
};

console.log("Az ember autójának a márkája:", ember.auto.marka);

// 4. Objektumok tömbje
const emberek = [
    { nev: "János", kor: 21 },
    { nev: "Anna", kor: 14 },
    { nev: "Gábor", kor: 87 }
];

function atlag(x) {
    let s = 0;
    // for (const ember of x) {
    //     s += ember.kor;
    // }
    for (let i = 0; i < x.length; i++) {
        s += x[i].kor;
    }
    const a = s / x.length;
    // return kerekit(a, 2);
    return parseFloat(a.toFixed(2));
}

function kerekit(x, n) {
    return Math.round(x * 10 ** n) / 10 ** n;
}

function legfiatalabbEmber(x) {
    let legfiatalabb = x[0];
    for (const ember of x) {
        if (ember.kor < legfiatalabb.kor) {
            legfiatalabb = ember;
        }
    }
    return legfiatalabb;
}