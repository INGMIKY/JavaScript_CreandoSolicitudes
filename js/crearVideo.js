import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

// estamos campurando el valor de los inputs del formulario para crear los videos
async function crearVideo(evento){
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    const descripcion = Math.floor(Math.random() * 10).toString();

    try{
         await conexionAPI.enviarVideo(titulo, descripcion, url, imagem);
        // window.location.href="./pages/envio-concluido.html";
        window.location.href="./envio-concluido.html";
    }
    catch(e){
        alert(e)
    }
   

}

formulario.addEventListener("submit", evento => crearVideo(evento));