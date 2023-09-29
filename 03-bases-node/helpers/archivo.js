
const fs = require('fs')

const hacerArchivo = async (n,salida) => {
   return fs.writeFile(n, salida, (err) => {
        if (err) {
            console.log (`Error Guardando Archivo ${n}`)
            throw err;
        } else {
            console.log (`Archivo ${n} creado con exito.`);
        }
      
    })

}


module.exports = {
    hacerArchivo
}