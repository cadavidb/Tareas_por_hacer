let descripcion = {

    demand: true,
    alias: 'd'

}

const yargs = require('yargs')
    .command('crear', 'añade una tarea al stack', {
        descripcion
    })

.command('actualizar', 'cambiar el estado de la tarea', {

    descripcion,
    estado: {
        default: true,
    }

})

.command('listar', 'ver tareas pendientes', {

    pendientes: {
        alias: 'v'
    }

})

.command('borrar', 'borra una tarea', {

    descripcion: {
        demand: true,
        alias: 'b'
    }

})

.help()
    .argv;

let comando = yargs._[0]

module.exports = {
    comando
}