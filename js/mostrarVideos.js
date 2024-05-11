import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");


// LA FORMA DEL INSTRUCTOR DE MOSTRAR LOS VIDEOS
export default function crearCard(titulo, descripcion, url, imagen){
    const video = document.createElement("li");
    video.className="videos__item";
    video.innerHTML=`<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="${imagen}">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
    </div>`;

    return video;
}

async function listarVideos(){
    try{
        const listaAPI = await conexionAPI.listarVideos();
        listaAPI.forEach(elemento => lista.appendChild(crearCard(elemento.titulo, elemento.descripcion, elemento.url, elemento.imagem)));
    }
    catch(error){
        lista.innerHTML=`<h2 class="mensaje__titulo"">Ha ocurrido un problema con la conexion :(</h2>`
        console.log(error);
    }

}
listarVideos()

// MI FORMA DE MOSTRAR LOS VIDEOS
// async function crearCard(){
//     const listaAPI = await conexionAPI.listarVideos();

//     listaAPI.forEach(elemento =>{
//         const contenido = `<li class="videos__item">
//         <iframe width="100%" height="72%" src="${elemento.url}"
//             title="${elemento.titulo}" frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen></iframe>
//         <div class="descripcion-video">
//             <img src="${elemento.imagem}">
//             <h3>${elemento.titulo}</h3>
//             <p>${elemento.descripcion}</p>
//         </div>
//     </li>`

//     lista.innerHTML = lista.innerHTML + contenido; 
//     })
// }
// crearCard();

