// -----------------------------------------------------------
// Stílusok

// Naming conventions
// Python, SQL (mezők): snake_case => jegyek_szama
// C#: PascalCase => Console.WriteLine()
// CSS: kebab-case, dash-case, css-case... => text-align
// JS: camelCase => textAlign

// body.setAttribute("style", "width: 80%; margin: auto");
body.style.width = "80%";
body.style.margin = "auto";

h1.style.border = "5px solid green";
h1.style.padding = "10px";
h1.style.textAlign = "center";
h1.style.backgroundColor = "lightgreen";

img.style.borderRadius = "30px";
img.style.float = "right";
img.style.transform = "rotate(-5deg)";

// ----------------------------------------------------
// .kedvenc osztályú elemek formázása

// MO1: HTMLCollection-ként kiválasztva
// const elemek = document.getElementsByClassName("kedvenc");
// for (const elem of elemek) {
//     elem.style.fontWeight = "bold";
//     elem.style.textDecorationLine = "underline";
//     elem.style.textDecorationStyle = "dashed";
// }

// MO2: NodeList-ként kiválasztva
const elemek = document.querySelectorAll(".kedvenc");
for (const elem of elemek) {
    elem.style.fontWeight = "bold";
    elem.style.textDecorationLine = "underline";
    elem.style.textDecorationStyle = "dashed";
}

// MO3: ???
// const style = document.createElement("style");
// style.innerHTML = `.kedvenc {
//                     font-weight: bold;
//                     text-decoration-line: underline;
//                     text-decoration-style: dashed;
//                 }`;
// document.head.appendChild(style);