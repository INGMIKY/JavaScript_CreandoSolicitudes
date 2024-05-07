async function listarVideos(){
    try{
        const conexion = await fetch("http://localhost:3001/videos");
        const conexionConvertida = await conexion.json();

        return conexionConvertida;

        // console.log(conexionConvertida);
    }
    catch(error){
        console.log(error)
    }
}
// listarVideos();
export const conexionAPI = {
    listarVideos
}