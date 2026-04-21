// Konstansok
const szoveg = "A nyelv gyümölcsnek nevezi a növények édes és húsos termését.";
const gyumolcsok = ["Alma", "Körte", "Eper", "Narancs", "Szőlő"];
const kedvencek = [true, false, true, false, false];
const TESCO = "https://bevasarlas.tesco.hu/groceries/hu-HU/shop/zoldseg-gyumolcs/gyumolcsok/all";



// -----------------------------------------------------------
// Elemek

// H1 elem - Gyümölcsök
const h1 = document.createElement("h1"); // Létrehozás
// h1.textContent = "Gyümöl\ncsök";
h1.innerText = "Gyümölcsök"; // Módosítás

// const body = document.body;
const body = document.querySelector("body");
body.appendChild(h1); // Beillesztem a DOM fába
// const h1masik = document.createElement("h1");
// h1masik.innerText = "Gyümölcsök";
// body.append(h1, h1masik);

// Kommentek eltüntetése
const head = document.querySelector("head");
// const comment = head.childNodes[head.childNodes.length-2];
const comment = document.head.lastChild.previousSibling;
head.removeChild(comment);
// comment.remove();

const comment2 = document.body.childNodes[1];
body.removeChild(comment2);


// Hivatkozás - TESCO




// Bekezdés




// Kép - gyumolcsok.jpg




// Lista




// Bekezdés - strong (alapműveletekkel)


// Másképp:
