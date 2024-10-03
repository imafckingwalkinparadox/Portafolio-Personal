import { header } from "../header/header.js";
import { dataProyectos } from "../../DATA/data.js";

function proyectos(){
    let section = document.createElement('section');
    section.className = "section-header"
    section.appendChild(header())
    section.appendChild(ListaProyectos())

return section;
}

function ListaProyectos(){
    let div = document.createElement('div')
    div.className = "Lista-proyectos";

    dataProyectos.forEach((proyecto)=>{
        div.appendChild(lista(proyecto.nombre, proyecto.descripcion, proyecto.web, proyecto.github, proyecto.stack))
    });
    return div;
}


//item lista
function lista(nombre, web, github, stack){
    let div = document.createElement('div');
    div.className = "div-item";
    
//Nombre:Formulario
    let a =document.createElement('a');
    a.className = "link-github-page"
    a.href = "https://imafckingwalkinparadox.github.io/Proyectos_Formulario/";
    a.innerText = "Formulario"
    div.appendChild(a);

    let stacks = document.createElement('div');
    stacks.innerText = "[js, css, html]";
    div.appendChild(stacks);

    let btnGithub = document.createElement('a');    
    btnGithub.className = "btn-github";
    btnGithub.href = "https://github.com/imafckingwalkinparadox/Proyectos_Formulario";
    btnGithub.innerHTML = "Github";
    div.appendChild(btnGithub);

return div;    
}

export{proyectos}
