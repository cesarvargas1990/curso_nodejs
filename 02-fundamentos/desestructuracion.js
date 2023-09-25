const deadpool = {
    nombre: "wade",
    apellido: 'winston',
    poder: "regeneracion",
    getNombre() {
        return `${this.nombre} ${this.apellido}`
    }

}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;



const {nombre,apellido,poder} = deadpool;


console.log(nombre,apellido,poder)

function imprimeHeroe ( {nombre, apellido, poder, edad = 10}  ) {
    nombre ='cesar'
    console.log(nombre,apellido,poder,edad) 
}

const heroes = ['deadpool','superman','batman']

//const h1 = heroes[0]

//console.log(h1)

const [ , , h3] = heroes


console.log(h3)

