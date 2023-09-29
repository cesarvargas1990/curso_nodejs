

const {hacerArchivo} = require('./helpers/archivo')
const {tabla} = require('./helpers/multiplicar')
const argv=require('./config/yargs')
var colors = require('colors');

console.clear();


console.log("argumentos"+" base: "+argv.base+" limit:"+argv.limit+" listar: "+argv.l)
console.log(argv)

let salida = '';
let base = argv.base
let limite = argv.lm
let mostrar = argv.l
tabla(base,limite,mostrar).then((s)=>{
    hacerArchivo(`./salida/tabla-${base}.txt`,s)
})



