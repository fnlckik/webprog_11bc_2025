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




// F3




// F4




// F5




// F6




// F7




// F8




// F9




function bevasarlo(termekek) {
    beolvas(termekek);
    beolvas(termekek);
    // osszesAr(termekek);
    // kerekAr(termekek);
    // legdragabb(termekek);
    // dragak();
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
