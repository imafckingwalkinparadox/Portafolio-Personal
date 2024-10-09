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
function lista(nombre, descripcion, web, github, stack, enlaceDescarga) {
    let div = document.createElement('div');
    div.className = "div-item";

    let a = document.createElement('a');
    a.className = "link-github-page";
    a.href = web;
    a.innerText = nombre;
    div.appendChild(a);

    let stacks = document.createElement('div');
    stacks.innerText = `[${stack.join(', ')}]`;
    div.appendChild(stacks);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.href = github;
    btnGithub.innerText = "Github";
    div.appendChild(btnGithub);

    let btnDescargar = document.createElement('a');
    btnDescargar.className = 'btn-descargar';
    btnDescargar.href = enlaceDescarga; 
    btnDescargar.download = 'https://github.com/imafckingwalkinparadox/Hospitalario/raw/refs/heads/main/src/descargas/artifacts/Hospitalario_jar/Hospitalario.jar'; 

    let iconoDescarga = document.createElement('img');
    iconoDescarga.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAADb29smJib09PQgICAWFhaIiIiSkpIFBQUdHR3f398ZGRm5ubnq6urQ0NC/v78ODg5OTk7Hx8eioqJ8fHw5OTkyMjJYWFhFRUWzs7MtLS0+Pj6oqKhTU1NmZmZzc3OampqvlrWOAAADo0lEQVR4nO2c2XaCMBRFmSwoNghCq7VO//+Tpa1DckkgXdFwtWe/ElbPbiATiUEAAAAAAAAAAAAAAAAAAAAAAAD/m+iYpouxQ9yIdFaG0/k6GjvHLdiHJ/Kxk7izPLuEb2NHcae6yIRi7CzOTK4yr2NncSWRZD7GDuNK8qw1AxlOPJWMeFaZhx+fQYYrssxy7DCuQIYrkOFKPoMMT2SZYuwwrkCGK5DhSgQZpsgyD7/aDBmuyDIP/xngqWSKOWR4Iss8/PcZyHBFlknGDuMKZLgCGa4sX55UZuwszjyiTGJ6hB5PJmp21SrTdvCLQRmxbZqaz+DgtfyOOn3XjYoHZRZxW6Kcbe8b0Zqib4z/OiCzPV+s7x3Tjs+wx2ZAZnu9yuJJK96vgbprFr0yyVG6NfOSdoBFLCXa0IW+Ppkkk+4Md57y9rLYyJE+ic1v46CVEVkp31l5S9yDeJMjhWv1+5hZRqQvyo2Nx8xm0lC1UermwyRDXZgsESaVmqqSbUwySVOqd7F4/1uSdzWXvB/bIJMc1FuYPGTfCGIjjQUMMiu2Lu0/+pOEu9hstTIxKc7lGftFkPfm0p/rZKh6eWQ2bcvJgxOf6kYjk+/UorOamUs7DSA2p1agK0MLTvi5dEPuflromsoUpF4mW4YurU2lsaEyBSlUct1Tn6+JTdSRKUgRxvs2xUZN2tocFZlCHcfx3ugkyBilSpSaKSbqZdYurc1cTbtqpOGkICpMdjlE2f6gb4XoyEaC1FoY612Sj8M+86cpmt802pc3oq+4CTqNO3E6o9Z4WhJITi7hVHtSgTa+BnZ6l8W5/ho/3c/1fF+l/YNWNivDM3btUr002tJUZKM/RNLpTDQuhnmltKCw91E18lTMMHQv6IyAsjNtCZC6pdiLjLSBJDWUieiERaUyvt3Z9FLoxYuM1POZZIK8t17MLRVLmT6bVU9KnjJBTvvIM4e+kExlTO9Nf2/IVaY7RG4p0/6ena1MsOy00EMujGU6NtMhF84ywVJ90oaXlDjLBEu5FbBYhmEtI33wDG2+wfKWCaK/uHCXCaKfgenM7pQ2d5lWp65tp8H8Zf4AZByAjC2QcQAytkDGAcjYAhkHIGMLZByAjC2QcUCWaUR0U0Q6osw9gQxkIPOPZeZeZOx2YDiz9rJFo/Yjc/ThovzIzx3x9FMIhelD8i3xtq8uP2ziu7LZ+zyzceMxGSFncf4MAAAAAAAAAAAAAAAAAAAAAABuyxdAWDHrEmH7SwAAAABJRU5ErkJggg=='; 
    iconoDescarga.alt = 'Descargar';
    iconoDescarga.className = 'icono-descarga';
    btnDescargar.appendChild(iconoDescarga);

    div.appendChild(btnDescargar);

    return div;    
}



export{proyectos}
