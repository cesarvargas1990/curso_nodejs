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

const getInfoUsuario = async (id)  => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
     
        return `El salario del empleado: ${empleado.nombre} es: ${salario.salario}`
    } catch (error) {
        throw error;
    }
  
}

getInfoUsuario(id).then (  msg=> console.log (msg) ).catch(e=>console.log('error',e))