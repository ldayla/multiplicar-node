let fs = require('fs');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("no es un numero");
            return;
        }
        data = ``;

        for (let i = 1; i <= limite; i++) {
            data += `${base}* ${i}=>${base*i}\n`


        }
        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla/tabla-${base}.txt`)

        });
    });
}
let listar = (base, limite = 10) => { // aqui en el segundo paramtro definimos tambien que el limite tenga un valos 10 por defecto
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite))
            reject("la base y el limite tienen que ser numeros");
        else {
            let datos = ``;
            for (let i = 1; i <= limite; i++) {
                datos += `${base} * ${i} = ${base*i}\n`;

            }
            resolve(datos);
        }
    });
}

module.exports = {
    crearArchivo,
    listar
}