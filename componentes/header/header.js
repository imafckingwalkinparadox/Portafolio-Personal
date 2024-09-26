function header(){
    let div = document.createElement('div');
    div.className = "header";

    let h2 = document.createElement('h2');
    h2.innerHTML = "Proyectos"
    div.appendChild(h2);

    let bttn = document.createElement('div');
    bttn.innerHTML = "Github";
    div.appendChild(bttn);


return div;
}

export {header}