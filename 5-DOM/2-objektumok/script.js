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
