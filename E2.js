/**
 * 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch

2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
 */

//solución

//let diaSemana = prompt('Ingresa día de la semana');

/* let diaSemana = '';

//estructura if

if (diaSemana === 'Lunes' || diaSemana === 'lunes'.toLocaleUpperCase() || diaSemana === 'lunes'.toLocaleLowerCase()) {

    console.log('today is Monday');

} else if (diaSemana === 'Martes' || diaSemana === 'martes'.toLocaleUpperCase() || diaSemana === 'martes'.toLocaleLowerCase()) {

    console.log('today is Tuesday');

} else if (diaSemana === 'Miercoles' || diaSemana === 'Miércoles' || diaSemana === 'miércoles' || diaSemana === 'miercoles'.toLocaleUpperCase() || diaSemana === 'miercoles'.toLocaleLowerCase()) {

    console.log('today is Wednesday');

} else if (diaSemana === 'Jueves' || diaSemana === 'jueves'.toLocaleUpperCase() || diaSemana === 'jueves'.toLocaleLowerCase()) {

    console.log('today is Thursday');

} else if (diaSemana === 'Viernes' || diaSemana === 'viernes'.toLocaleUpperCase() || diaSemana === 'viernes'.toLocaleLowerCase()) {

    console.log('today is Friday');

} else if (diaSemana === 'Sabado' || diaSemana === 'Sábado' || diaSemana === 'sábado' || diaSemana === 'martes'.toLocaleUpperCase() || diaSemana === 'martes'.toLocaleLowerCase()) {

    console.log('today is Saturday');

} else if (diaSemana === 'Domingo' || diaSemana === 'domingo'.toLocaleUpperCase() || diaSemana === 'domingo'.toLocaleLowerCase()) {

    console.log('today is Sunday');
} else {

    console.log('enter on a weekday');
} */

//switch

/* let dia = 'Lunes';

switch (dia) {
    case 'Lunes':
        console.log('Today is Monday');
        break;

    case 'Martes':
        console.log('Today is Tuesday');
        break;

    case 'Miercoles':
        console.log('Today is Wednesday');
        break;

    case 'Jueves':
        console.log('Today is Thursday');
        break;

    case 'Viernes':
        console.log('Today is Friday');
        break;

    case 'Sabado':
        console.log('Today is Saturday');
        break;

    case 'Domingo':
        console.log('Today is Sunday');
        break;

    default:
        console.log('Enter on weekday!!');
        break;
} */

//evitar usar switch

const DIA_SEMANA = "Lunes";

const WEEKDAY = {
    Lunes: "Monday",
    Martes: "Tuesday",
    Miercoles: "Wednesday",
    Jueves: "Thursday",
    viernes: "Friday",
    Sabado: "Saturday",
    Domingo: "Sunday",
};

const WEEKDAY_DAFAULT = "enter on weekday";

const DAY = WEEKDAY[DIA_SEMANA] || WEEKDAY_DAFAULT;

console.log(`Today is ${DAY}`);

//2

//if

/* const GASTO_TOTAL = 104;
const envio1 = 3;
const envio2 = 5;
const envio3 = 7;
const envio4 = "free";

if (GASTO_TOTAL >= 1 && GASTO_TOTAL <= 10) {

    console.log(
        `costo de envio $${envio1} + costo de producto $${GASTO_TOTAL} =  $${ envio1 + GASTO_TOTAL}`
    );
} else if (GASTO_TOTAL >= 10 && GASTO_TOTAL <= 20) {

    console.log(
        `costo de envio $${envio2} + costo de producto $${GASTO_TOTAL} =  $${ envio2 + GASTO_TOTAL}`
    );
} else if (GASTO_TOTAL >= 20 && GASTO_TOTAL <= 50) {

    console.log(
        `costo de envio $${envio3} + costo de producto $${GASTO_TOTAL} =  $${ envio3 + GASTO_TOTAL}`
    );
} else if (GASTO_TOTAL > 50) {

    console.log(
        `costo de envio ${envio4}`
    );
} else {

    console.log('No ha realizado ninguna compra')
} */