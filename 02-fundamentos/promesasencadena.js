const empleados = [
    { id: 1, nombre: "cesar" },
    { id: 2, nombre: "pablo" },
    { id: 3, nombre: "pedro" },
]

const salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 }
]

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((s) => s.id == id);
        (empleado) ? resolve(empleado) : reject(`Empleado con id ${id} no existe`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id == id);
        (salario) ? resolve(salario) : reject(`no existe salario para Empleado con id ${id} no existe`);
    });
}

const id = 2;

let nombre;
getEmpleado (id)
.then (empleado => {
    nombre = empleado.nombre;
   
    return getSalario(id);
})
.then( salario=> console.log('El empleado',nombre,' tiene salario de ',salario.salario) )
.catch(e=>console.log (e))