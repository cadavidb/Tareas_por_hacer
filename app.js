const { comando } = require('./config/yargs');

const { worker, listarTareas, cambiarEstado, borrar, } = require('./config/porHacer');

const { argv } = require('yargs');



switch (comando) {
    case 'crear':
        worker(argv.descripcion)

        break;
    case 'listar':
        listarTareas()
        break;

    case 'actualizar':
        cambiarEstado(argv.descripcion, argv.estado)
        break;
    case 'borrar':
        borrar(argv.descripcion)
        break;
    default:
        console.log('comando no reconocido');
        break;
}