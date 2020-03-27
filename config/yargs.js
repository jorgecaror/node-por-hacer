const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'

}

const completado = {

    alias: 'c',
    demand: true,
    desc: 'Marca como completado o pendiente la tarea'

}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar una tarea de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}