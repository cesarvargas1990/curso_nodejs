const empleados = [
    {id:1, nombre: "cesar"},
    {id:2, nombre: "pablo"},
    {id:3, nombre: "pedro"},
]

const salarios = [
    {id:1, salario: 1000},
    {id:2, salario: 2000}
]


const getEmpleado = (id, callback) => {

    //console.log(id)
    const empleado = empleados.find( (s)=> s.id == id  )
    if (empleado) {
        return callback(null,empleado);
    } else {
        return callback(`Empleado con id ${id} no existe`)
    }
    
}

const id = 1;

const getSalario = (id,callback) => {
    const salario = salarios.find( (s)=> s.id == id  )
   
    if (salario) {
        return callback(null, salario);

    } else {
        return callback(`Salario para el empleado con id ${id} no encontrado`)
    }
}

//console.log (getEmpleado(1))
//console.log (getEmpleado(5))

getEmpleado(1 , (err,empleado) => {
    if (err) {
        console.log('ERROR!!')
        return console.log(err)
    }

    getSalario(2, (err, salario) => {
        if (err) {
            console.log ('ERROR!!')
            return console.log(err)
        }
        console.log ('Salario')
        console.log(`el salario de id: ${salario.id} es: ${salario.salario} empleado: ${empleado.nombre}` )
    })

    console.log ("dentro de callback-- Empleado existe")
    console.log (empleado)
}   )


