const opciones = {
    base: { // el comando que la persona puede escribir ejemplo --base y dentro las configuraciones
        demand: true, // que es requerido
        alias: 'b' // es el alias  o abreviatura : en vez de poner --base 5 puede poner -b 5
    },
    limite: {
        alias: 'l',
        default: 5
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opciones //1, comando, 2 ayuda o descripcion, 3 un objeto con los parametros que pue recibir
    )
    .command('crear', 'crear un txt con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}