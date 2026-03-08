// Operátorok - műveletek

// 1. Aritmetikai
console.log("Összeg:", 2 + 3);
console.log("Kivonás:", 5 - 3);
console.log("Szorzás:", 2 * 3);
console.log("Osztás:", parseFloat((17 / 3).toFixed(2))); // kerekítés
console.log("Hányados:", parseInt(17 / 3)); // egész osztás
console.log("Maradék:", 17 % 3);
console.log("");

// Automatikus konverziók (sóhaj...)
// Lehet-e mindkettő szám?
// Lehet-e mindkettő szöveg?
console.log("Szöveg:", "alma" + "fa");
console.log("Szöveg:", 2 + "alma");
console.log("Szám:", "6" - 5);
console.log("Szám:", "2" * "3");

// Infinity
// Határérték (lásd: emelt matek)
console.log(1 / 0);
console.log(1 / -0);

// NaN: Matekban tilos műveletek
console.log(0 / 0);
console.log(Infinity - Infinity);
console.log(0 * Infinity);
console.log(6 * "alma");
console.log("alma" * "alma");
console.log("");

// -----------------------------------
// Változók aritmetikája
let x = 3;
x++;
console.log(x); // 4
x += 5;
console.log(x); // 9
console.log("");

// -----------------------------------
// 2. Relációs

// Alapok: <, <=, >, >=, ==, !=
console.log(2 < 3); // true
console.log(5 != 7); // true

// Automatikus konverziók (sóhaj..)
// Python: false
// C#: error
console.log(2 == "2"); // true
console.log("");

// Itt a baj!
// Matek: Ha a = b és b = c akkor a = c.
// JS: Nincs tranzitivitás.
console.log("0" == false); // 0 == 0 (true)
console.log("" == false); // 0 == 0 (true)
console.log("0" == ""); // Nincs konverzió (false)
console.log("");

// Új operátor: ===
// Szigorú egyenlőség (strictly equal)
console.log(2 === "2"); // false
console.log(2 !== "2"); // true
console.log("");

// NaN vizsgálat
console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true
console.log("");

// Még így is lehet gond..
// Matek: a < b VAGY a > b VAGY a = b.
// Js: Nincs trichotómia.
console.log(NaN < NaN);
console.log(NaN > NaN);
console.log(NaN == NaN);
console.log("");

// -----------------------------------
// 3. Logikai -> truthy, falsy

// !: tagadás -> 1.
// &&: és -> 2. -> falsy értéket keres
// ||: vagy -> 3. -> truthy értéket keres
console.log(3 < 2 || true && !(4 === 5)); // true
// console.log(false || true && true); 
// console.log(false || true); // true 
console.log("");

// Lusta kiértékelés
// Csak akkor értékeli ki az operandusokat, 
// ha még nem dőlt el az eredmény.

// Vigyázat! a < b < c jelentése (a < b) < c
console.log(1 < 3 < 5); // true
console.log(4 < 5 < 2); // true
// console.log((4 < 5) < 2);

// ------------------------------------
// Összegzés:
// .toFixed(n), parseInt(n)
// ===, !==
// isNaN(n)