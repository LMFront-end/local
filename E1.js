/**
 *  1. Escribir un programa que calcule el número de segundos que existen en un día.

Para ello debemos multiplicar los segundos de un minuto, por los minutos de

una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.

* 2. Realiza un programa que a partir de los valores ancho=2 y alto=5,

calcule el área de un rectángulo.

* 3 Hacer un conversor de grados centígrados a grados Fahrenheit.

Para ello deberé multiplicar por 9/5 y sumar 32.

Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.
 */

//Solución
//EJE 1
let horasDia = 24;
let segundos = 3600;
console.log('un día tiene ' + horasDia * segundos + ' Segundos');

//EJE 2

let base = 2;
let altura = 5;
console.log(`El area del rectángulo es: ${base * altura}`);

//EJE 3

let centigrados = 20;
let Fahrenheit = ((centigrados * 9) / 5) + 32;

console.log(Fahrenheit)