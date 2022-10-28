// • Crea un directorio nuevo llamado proyectosJavascript.
// • Crea un subdirectorio llamado proyecto1.
// • Dentro de ese directorio:
//      - Inicia el proyecto: npm init
// • Dentro de Visual Code Studio: 
//      - Crear un fichero index.js
//      - Crear un fichero run.js
// • En el fichero index.js (fichero de librería):
//      - Declarar las funciones de la calculadora por separado (suma, resta, producto, división)
//      - Al final del documento index.js escribir la sentencia: module.exports =
// • A continuación escribir el nombre de las funciones entre {} separados por comas de la librería que se desean exportar.
// • En el fichero run.js (fichero del programa principal) escribir la sentencia:
//      - let myLib = require("./index");
// • Llamar a todas las funciones de la librería e imprimir sus resultados.
// *- NOTA: Para llamar a la función hay que hacer myLib.función. Ej: myLib.suma(2,3)


let calculatorSum = (operation, op1 = 1, op2) => { operation === "sum" ? console.log(op1 + op2) : "" };
let calculatorSubs = (operation, op1 = 1, op2) => { operation === "subs" ? console.log(op1 - op2) : "" };
let calculatorMult = (operation, op1 = 1, op2) => { operation === "mult" ? console.log(op1 * op2) : "" };
let calculatorDiv = (operation, op1 = 1, op2) => { operation === "div" ? console.log(op1 / op2) : "" };
let calculatorCuad = (operation, op1 = 1, op2) => { operation === "cuad" ? console.log(op1 * op1) : "" };

module.exports = { calculatorSum, calculatorSubs, calculatorMult, calculatorDiv, calculatorCuad };