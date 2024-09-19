let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div"

let imgLogo = document.createElement('img');
imgLogo.className = "img-logo"
imgLogo.src = "https://eminismagazine.wordpress.com/wp-content/uploads/2015/04/colmillos-cartas.jpg";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Hector Villatoro";
navBarDiv.appendChild(h2);

export {navBarDiv}
