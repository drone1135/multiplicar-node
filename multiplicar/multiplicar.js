const fs = require('fs');
const colors = require('colors');


crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} ${i<limite?'\n':''}`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }
        let data = '';


        console.log('================='.green);
        console.log(`tabla del ${base} `.green);
        console.log('================='.green);
        for (let c = 1; c <= limite; c++) {
            data += `${base} * ${c} = ${base*c} ${c<limite?'\n':''}`;
        }
        resolve(console.log(data));
    })
}


module.exports = { crearArchivo, listarTabla }