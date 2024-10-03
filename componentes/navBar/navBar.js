function crearMenuLateral() {
const herramientas = [
    { nombre: 'Herramienta 1', color: '#6a0dad' },
    { nombre: 'Herramienta 2', color: '#008080' },
    { nombre: 'Herramienta 3', color: '#FFA500' },
    { nombre: 'Herramienta 4', color: '#008000' },
    { nombre: 'Herramienta 5', color: '#FF0000' },
    { nombre: 'Herramienta 6', color: '#000000' }
];

let aside = document.createElement('aside');
aside.className = 'menu-lateral';
herramientas.forEach((herramienta) => {
        
let item = document.createElement('div');
item.className = 'menu-item';

let colorBox = document.createElement('span');
colorBox.className = 'color-box';
colorBox.style.backgroundColor = herramienta.color;

let nombre = document.createElement('span');
nombre.className = 'nombre-herramienta';
nombre.innerText = herramienta.nombre;

item.appendChild(colorBox);
item.appendChild(nombre);
aside.appendChild(item);
});

    return aside;
}

function crearFormularioContacto() {
let form = document.createElement('form');
form.className = 'form-contacto';
form.innerText = "Contacto";

let inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.className = 'input-form';

form.appendChild(inputNombre);

let inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.className = 'input-form';

form.appendChild(inputEmail);

let inputMensaje = document.createElement('textarea');
inputMensaje.className = 'input-form textarea-form';

form.appendChild(inputMensaje);

let btnEnviar = document.createElement('button');
btnEnviar.type = 'submit';
btnEnviar.innerText = 'Enviar';
btnEnviar.className = 'btn-enviar';

form.appendChild(btnEnviar);

    return form;
}

let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.className = "img-logo";
imgLogo.src = "https://eminismagazine.wordpress.com/wp-content/uploads/2015/04/colmillos-cartas.jpg";

navBarDiv.appendChild(imgLogo);


let h2 = document.createElement('h2');
h2.innerText = "Hector Villatoro";

navBarDiv.appendChild(h2);
navBarDiv.appendChild(crearMenuLateral());

let espaciador = document.createElement('div');
espaciador.style.height = '40px'; 


navBarDiv.appendChild(espaciador);
navBarDiv.appendChild(crearFormularioContacto());

export { navBarDiv };
