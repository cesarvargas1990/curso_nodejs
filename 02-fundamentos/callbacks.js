setTimeout (function () {
    console.log("hola mundo")
}, 1000)




const getUsuarioId = (id, callback) => {

    const usuario = {
        id,
        nombre: 'cesar'
    }

    setTimeout (  () =>  callback(usuario), 1500 )


}

getUsuarioId(2, (usuario) => {
    console.log ('hola mundo paso a callback');
    console.log(usuario.nombre)
});