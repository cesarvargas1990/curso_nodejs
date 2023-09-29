const argv = require('yargs').option('b', {
    alias: "base",
    type:"number",
    demandOption:true,
    describe: "Es la base de la tabla"
}).option('l' , {
    alias: "listar",
    type:"boolean",
    demandOption:false,
    default:false,
    describe: "Determina si muestra o no la lista de la tabla"
}).option('lm' , {
    alias: "limit",
    type:"number",
    demandOption:false,
    default:5,
    describe: "Define el limite de la tabla"
})

.check( (argv, options) => {
    if (isNaN(argv.b) ) {
        throw("La base debe ser número")
    }
    if (isNaN(argv.lm) ) {
        throw("Limite debe ser número")
    }
    return true
})

.argv

module.exports = argv