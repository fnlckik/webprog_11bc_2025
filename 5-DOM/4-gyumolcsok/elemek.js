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
// HTML attribútum <=> JS adattag

const a = document.createElement("a");
a.innerText = "TESCO";
a.href = TESCO;
a.target = "_blank";
body.appendChild(a);

// Bekezdés

const p = document.createElement("p");
// p.innerText = szoveg;
// body.appendChild(p); // Nem jó helyre kerül
// Beszúrja a <p> elemet a <body>-ba az <a> elé
// a.insertAdjacentElement("beforebegin", p);
// a.before(p);
body.insertBefore(p, a);

// Kép - gyumolcsok.jpg
// img.setAttribute("width", 280);
// img.setAttribute("alt", "gyumolcsok");

const img = document.createElement("img");
img.src = "kepek/gyumolcsok.jpg";
img.width = 280;
img.alt = "gyumolcsok";
img.title = "Vegyes gyümölcsök";
p.after(img);

// Lista
// li.className = "felkover piros";
// li.classList.add("felkover");
// li.classList.add("piros");

const ul = document.createElement("ul");
for (let i = 0; i < gyumolcsok.length; i++) {
    const li = document.createElement("li");
    li.innerText = gyumolcsok[i];
    if (kedvencek[i]) {
        // Baj: a class kulcsszó foglalt a nyelvben!
        // li.class = "kedvenc";
        // li.setAttribute("class", "kedvenc");
        // li.className = "kedvenc";
        li.classList.add("kedvenc");
    }
    ul.appendChild(li);
}
img.after(ul);

// Bekezdés - strong (alapműveletekkel)

// p.innerText = "A nyelv <strong>gyümölcs</strong>nek";
const t1 = document.createTextNode("A nyelv ");
const strong = document.createElement("strong");
const t2 = document.createTextNode("nek nevezi a növények édes és húsos termését.");
strong.innerText = "gyümölcs";
// p.appendChild(t1);
// p.appendChild(strong);
// p.appendChild(t2);
p.append(t1, strong, t2);

// p.innerText = "";

// Másképp:
// p.append(szoveg.split("gyümölcs")[0], strong, szoveg.split("gyümölcs")[1]);

p.innerHTML = "A nyelv <strong>gyümölcs</strong>nek nevezi a növények édes és húsos termését.";
