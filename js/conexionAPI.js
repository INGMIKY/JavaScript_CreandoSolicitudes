async function listarVideos(){
    try{
        const conexion = await fetch("http://localhost:3001/videos");
        const conexionConvertida = await conexion.json();

        return conexionConvertida;

        // console.log(conexionConvertida);
    }
    catch(error){
        console.log(error);
    }
}

async function enviarVideo(titulo, descripcion, url, imagem){
    try{
        const conexion = await fetch("http://localhost:3001/videos", {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                titulo:titulo,
                descripcion:`${descripcion} mil visualizaciones`,
                url:url,
                imagem:imagem
            })
        })
        const conexionConvertida =  conexion.json();

        return conexionConvertida;
        
    }
    catch(error){
        console.log(error);
    }
}


// para hacer funcional el buscador, debemos de modificar la url de los videos de la bs
// agregado un signo ? que es el comienzo del parametro de consulta seguido de "q" haciendo referencia a query
// de consilta y el igualdad = para despues poner la palabra clave que es donde se hara las
// coincidencias 
async function buscarVideo(palabraClave){
    try{
        const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
        const conexionConvertida = await conexion.json();

        return conexionConvertida;
    }
    catch(error){
        console.log(error)
    }
}


// listarVideos();
export const conexionAPI = {
    listarVideos, enviarVideo, buscarVideo
}