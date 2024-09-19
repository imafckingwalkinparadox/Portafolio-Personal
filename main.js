import { navBarDiv } from "./componentes/navBar/navBar.js";

let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav_Bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

let proyecto = document.createElement('section');
proyecto.className = "proyect";
proyecto.innerText = "Hola soy proyecto";
DOM.appendChild(proyecto);