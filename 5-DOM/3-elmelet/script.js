// 1. document (object)
// document.__proto__
// document.title, document.URL

// 2. document.children
// "Tömb szerű elem" -> HTMLCollection
// html -> document.children[0]
// body -> document.children[0].children[1]
// p -> document.children[0].children[1].children[1]
// "Statikus" -> document.children[0].children[1].children[1].innerText

// Elmélet:
// DOM (mese): Minden HTML dokumentum elemhez tartozik
// egy JS objektum (reprezentáns).
// Ezt a megfeleltetést hívjuk Document Object Model-nek.

// HTML elem <-> JS objektum
// HTML attribútum <-> JS objektum adattag (tulajdonság)

// Fontos:
// A DOM és a böngészőben látható weblap
// élő kapcsolatban van!
// Egyiket módosítjuk, másik is módosulni fog!

// ------------------------
// 3. document.childNodes
// "Tömb szerű elem" -> NodeList
// html -> document.childNodes[1]
// body -> document.childNodes[1].childNodes[2]
// p -> document.childNodes[1].childNodes[2].childNodes[5]
// "Statikus" -> document.childNodes[1].childNodes[2].childNodes[5].innerText

// DOM: egy fagráf, amely a HTML dokumentum
// részeihez tartozó reprezentánsokból áll.
// Ezek lehetnek (számunkra):
// 1. HTML elemek
// 2. Text Node-ok
// 3. comment
// ...
// Programozható felületet biztosít a HTML dokumentumokhoz.
// Módosítjuk a csomópontokat -> módosulnak az elemek.
// Node: csomópont, a fagráf egy csúcsa.

// ----------------------------
// Elemek elérése

// 1. Elem lekérése ID alapján: // #bekezdes
// const p = document.getElementById("bekezdes");
// p.innerText = "Dinamikus";
// defer: halasztás, várás

// 2. Elemek lekérése CLASS alapján: // .szoveg
// document.getElementsByClassName("szoveg");
// HTMLCollection-t ad

// 3. Elemek elérése TAG alapján // p
// document.getElementsByTagName("p")
// HTMLCollection-t ad

// 4. Elemek elérése NAME attribútum alapján // [name="viewport"]
// document.getElementsByName("viewport")
// NodeList-ad
// Szinte soha nem használjuk!

// 5. Elem elérése SELECTOR segítségével.
const p = document.querySelector("#bekezdes");
p.innerText = "Dinamikus";

// 6. Elemek elérése SELECTOR segítségével.
// document.querySelectorAll(".szoveg")