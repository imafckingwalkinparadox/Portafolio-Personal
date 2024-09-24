function proyectos(){
    let section = document.createElement('section');
    section.className = "section-header"
    section.appendChild(header())
    section.appendChild(lista())



return section;
}

//funcion header

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

//item lista
function lista(){
    let div = document.createElement('div');
    div.innerText = "Item Lista";

return div;    
}


export{proyectos}
