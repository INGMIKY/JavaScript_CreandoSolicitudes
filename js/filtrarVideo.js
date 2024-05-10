import { conexionAPI } from "./conexionAPI.js";

async function filtrarVideo(evento){
    try{
        // Evitar que se recarge la pagina cuando se accione el evento
        evento.preventDefault();
        const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
        const busqueda = conexionAPI.buscarVideo(datosDeBusqueda);

        console.log(busqueda);
    }
    catch(error){
        console.log(error);
    }
}


const boton = document.querySelector("[data-boton-busqueda]");
boton.addEventListener("click", evento =>filtrarVideo(evento))