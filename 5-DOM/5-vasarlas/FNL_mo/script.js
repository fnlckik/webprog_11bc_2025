// F1
// splice(startIndex, end) -> visszatér a tartománnyal (range)
// splice(startIndex, deleteCount) -> kiveszi az elemeket
function beolvas(termekek) {
    // termekek.length = 0
    termekek.splice(0); // termekek.clear(); -> ürítsük a tömböt ki
    const sorok = document.querySelectorAll("ul li");
    for (const sor of sorok) {
        const darabok = sor.innerText.split(" - "); // ["Sajt", "2849"]
        const termek = 
        { 
            nev: darabok[0], 
            ar: parseInt(darabok[1])
        };
        termekek.push(termek);
    }
}

// F2
function osszesAr(termekek) {
    let s = 0;
    for (const termek of termekek) {
        s += termek.ar;
    }
    const span = document.getElementById("koltseg");
    span.innerText = s;
}



// F3
function vanNulla(termekek) {
    let i = 0;
    while (i < termekek.length && !(termekek[i].ar % 10 === 0)) {
        i++;
    }
    return i < termekek.length;
}

// x.toString() -> konvertálás stringgé
function kerekAr(termekek) {
    let span = document.querySelector("#nulla span");
    if (!span) {
        span = document.createElement("span");
        const li = document.querySelector("#nulla");
        li.appendChild(span);
    }
    span.innerText = vanNulla(termekek) ? "Igen" : "Nem";
}
// if (i < termekek.length) {
//     span.innerText = "Igen";
// } else {
//     span.innerText = "Nem";
// }



// F4
// elemek: <li> "lista"
// function dragak() {
//     const elemek = document.querySelectorAll("ul li");
//     for (const elem of elemek) {
//         if (parseInt(elem.innerText.split(" - ")[1]) > 2000) {
//             elem.style.fontWeight = "bold";
//             const span = elem.childNodes[1];
//             span.classList.add("draga");
//         }
//     }
// }

// elemek: <span> "lista"
// function dragak() {
//     const elemek = document.querySelectorAll("ul li span");
//     for (const elem of elemek) {
//         if (parseInt(elem.innerText) > 2000) {
//             elem.classList.add("draga");
//             elem.parentNode.style.fontWeight = "bold";
//         }
//     }
// }

function dragak() {
    const elemek = document.querySelectorAll("ul li");
    for (const elem of elemek) {
        if (parseInt(elem.innerText.split(" - ")[1]) > 2000) {
            elem.style.fontWeight = "bold";
            const span = elem.querySelector("span"); // az <li> elemben lévő <span> elemet vegyük ki
            span.classList.add("draga");
        }
    }
}



// F5
function legdragabb(termekek) {
    let maxTermek = termekek[0];
    for (const termek of termekek) {
        if (termek.ar > maxTermek.ar) {
            maxTermek = termek;
        }
    }
    // const span = document.getElementById("legdragabb");
    // span.textContent = maxTermek.nev;
    const span = document.querySelector("#legdragabb");
    span.innerText = maxTermek.nev;
}



// F6
// ujTermek("Fagyi", 500)
// ujTermek("Tarja", 2979)
function ujTermek(nev, ar) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const span = document.createElement("span");
    // li.innerText = nev + " - ";
    li.innerText = `${nev} - `;
    span.innerText = ar;
    li.appendChild(span);
    /*
    const li = document.createElement("li");
    li.innerHTML = `${nev} - <span>${ar}</span>`;
    ul.appendChild(li);
    */
    // ul.innerHTML += `<li>${nev} - <span>${ar}</span></li>`;
    bevasarlo([]);
}



// F7
function kepekBeszuras(kepek) {
    const div = document.querySelector("#kepek");
    for (const kep of kepek) {
        const img = document.createElement("img");
        img.src = `./pictures/${kep}.jpg`;
        img.height = "100";
        img.alt = kep;
        img.style.height = "100px";
        div.appendChild(img);
        // div.innerHTML += `<img src="pictures/${kep}.jpg" alt=${kep} height="100">`;
    }
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
}



// F8
// magic number: olyan szám, aminek a funkciója nem érthető közvetlen a kódból
const MAXVALUE = 3000;
function diagram(termekek) {
    // const d = document.getElementById("diagram");
    const d = document.querySelector("#diagram");
    for (const termek of termekek) {
        const div = document.createElement("div");
        div.innerText = termek.nev;
        div.style.backgroundColor = "lightgreen";
        div.style.margin = "1em 0";
        // div.style.width = (termek.ar / MAXVALUE * 100) + "%";
        div.style.width = `${termek.ar / MAXVALUE * 100}%`;
        d.appendChild(div);
    }
    const felirat = document.createElement("div");
    const span1 = document.createElement("span");
    span1.innerText = 0;
    const span2 = document.createElement("span");
    span2.innerText = MAXVALUE;
    const hr = document.createElement("hr");
    felirat.append(span1, hr, span2);
    felirat.id = "felirat";
    // felirat.innerHTML = `<span>0</span><hr/><span>${MAXVALUE}</span>`;
    d.appendChild(felirat);
    // d.innerHTML += `<div id="felirat">
    //                     <span>0</span>
    //                     <hr/>
    //                     <span>${MAXVALUE}</span>
    //                 </div>`;
}



// F9
// Emlék: attribútum szelektor (pl.: radio gombot)
// input[type="radio"]
// "alma".replaceAll("a", "A") => "AlmA"
function hivatkozasok() {
    const menupontok = document.querySelectorAll("body>div[id]");
    const div = document.createElement("div");
    for (const menupont of menupontok) {
        const a = document.createElement("a");
        // a.innerText = menupont.id.replace(menupont.id[0], menupont.id[0].toUpperCase());
        // a.innerText = menupont.id[0].toUpperCase() + menupont.id.slice(1);
        a.innerText = menupont.id;
        a.style.textTransform = "capitalize";
        // a.href = `#${menupont.id}`;
        a.href = "#" + menupont.id;
        div.appendChild(a);
    }
    const h1 = document.querySelector("h1");
    h1.before(div);
}



function bevasarlo(termekek) {
    beolvas(termekek);
    osszesAr(termekek);
    kerekAr(termekek);
    legdragabb(termekek);
    dragak();
    diagram(termekek);
}

// Termékek listája:
/*
termekek = [
    {
        nev: "Sajt",
        ar: 2849
    },
    {
        nev: "Szalonna",
        ar: 1637
    },
    ...
]
*/
function main() {
    const termekek = ["Morgó", "Hapci", "Kuka"];
    const kepek = ["sajt", "kave", "tejfol"];
    bevasarlo(termekek);
    kepekBeszuras(kepek);
    hivatkozasok();
}

main();
