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


// listarVideos();
export const conexionAPI = {
    listarVideos, enviarVideo
}