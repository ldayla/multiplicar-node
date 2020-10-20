const { crearArchivo, listar } = require('./multiplicar/multiplicador')
const { argv } = require('./config/yargs');
let comando = argv._[0]; // _ es el arreglo donde se guaradan todos los comandos que no tienen pares de valores,  este caso ponemos 0 porque solo vamos a pasar un comando, entonces cogemos la primera posicion

switch (comando) {
    case 'listar':

        listar(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(`la tablas ${result} a sido creada`);
        }).catch((err) => {
            console.log(err);
        });
        break;

    default:
        console.log("comando incorrecto");
        break;
}


//let argv2 = process.argv;
// // let parte = argv2[2];
// // let base = parte.split('=')[1];



console.log(argv);