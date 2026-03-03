let a = 5;
console.log("alma");
console.clear();

// Típusok

// Tipp: string, char, int, float, double, bool, List<>, struct

// Valóság:
// string, char -> string
// int, float, double -> number
// bool -> boolean
    // array, List<> -> array (python)
    // struct -> object

// 1. Szöveg
console.log("1. Szöveg:", "5", typeof("5"));

// 2. Szám
console.log("2. Szám:", 5, 3.14, typeof(5), typeof(3.14));

// 3. Logikai
console.log("3. Logikai:", true, typeof(true));

// ---------------------------------------------------
let b = 5;
let c;

// 4. Undefined
// Kezdőérték nélküli változók.
// Return nélküli függvények visszatérési értéke.
console.log("4. Undefined:", c, typeof(c));

// 5. NaN (Not A Number)
// Undefined értékkel végzett művelet.
// Number("alma")
console.log("5. NaN:", b + c, typeof(NaN));

// -----------------------------------------
// Konverziók

console.log(Number("5")); // 5
console.log(String(5)); // "5"

// truthy
console.log(Boolean(5)); // true
console.log(Boolean("alma")); // true

// falsy
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
console.log(Boolean(null)); // false

// Lehetetlen konverzió
console.log(Number("alma")); // NaN
