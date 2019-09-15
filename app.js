//requires
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = multipli = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(lista => lista).catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('Archivo creado: ' + `${archivo}`.green)).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}