const fs = require('fs')
const colors = require('colors');

let tareas = [];

const GuardarBD0 = () => {
    let data = JSON.stringify(tareas)

    fs.writeFile('BD/data.json', data, err => {
        if (err) {
            console.log(err);
        }
        return;
    })


}
let cargarBaseDatos = () => {
    try {
        tareas = require('../BD/data.json')
    } catch (error) {
        tareas = []
    }
}

const worker = (descripcion) => {
    cargarBaseDatos()
    let porhacer = {
        descripcion,
        completado: false
    }
    tareas.push(porhacer)
    GuardarBD0()
}

const listarTareas = () => {
    cargarBaseDatos();
    console.log('╔=============TAREAS PENDIENTES================╗'.blue);


    for (let i = 0; i < tareas.length; i++) {
        console.log("   Nombre: " + (tareas[i].descripcion) + "       " + "Completado:" + (tareas[i].completado ? "Si".green : "NO".red));

    }
    console.log('╚==============================================╝'.blue);
}

const cambiarEstado = (descripcion, estado) => {
    cargarBaseDatos();

    let num = tareas.findIndex(ele => {
        if (ele.descripcion === descripcion) {
            return true
        } else {
            return false;
        }
    })

    if (num >= 0) {
        tareas[num].completado = estado;
        GuardarBD0()

    }

}

const borrar = (descripcion) => {


    cargarBaseDatos()
    let value = tareas.length;
    tareas = tareas.filter(ele => {
        if (ele.descripcion != descripcion) {
            return ele.descripcion;
        }
    })

    if (value === tareas.length) {
        console.log('no se borro nada');
    } else {
        GuardarBD0()
        console.log('tarea borrada con exito');
    }

}



module.exports = {
    worker,
    tareas,
    GuardarBD0,
    listarTareas,
    cambiarEstado,
    borrar
}