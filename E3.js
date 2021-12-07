/* 1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.

Pista: anidamiento.

2.Realice el equivalente con la declaración while y do-while */

for (i = 1; i < 13; i++) {
    console.log(`La tabla del ${i}:`);

    for (j = 1; j < 10; j++) {
        console.log(`${i} x ${j} : ${i * j};`)
    }

    console.log('*********')
}