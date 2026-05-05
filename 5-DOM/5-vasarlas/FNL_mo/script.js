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




// F7




// F8




// F9




function bevasarlo(termekek) {
    beolvas(termekek);
    osszesAr(termekek);
    kerekAr(termekek);
    legdragabb(termekek);
    dragak();
    // diagram(termekek);
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
    // kepekBeszuras(kepek);
    // hivatkozasok();
}

main();
