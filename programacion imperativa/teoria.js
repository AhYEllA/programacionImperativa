//las variables son espacios de memoria en la computadora donde podemos almacenar distintos tipos de datos
//modulo 2

// let contador 
// const url

// las practicas si bien no son obligatorias para que nuestro codigo funcione, van a permitir que este sea mas facil de leer y de mantener

// la primera vez que delaramos una variable es necesaria la palabra reservada let
let miApodo = 'Hackerman';
// una vez la varible fue declarada, le asignamos valors sin let
miApodo ='El Barto'

const email = "mi.email@hotmail.com"
//una vez que les asignemos un valor, no podremos cambiarlo.

// VAR la principal diferencia entre var y let  es que var sera accesible de manera global por todo nuestro codigo y no estara limitado el acceso a solo el bloque de codigo donde fue declarado como es el caso de let.

// var let const solo pueden ser utilizadas para el proposito con el que fueron creadas
// no pueden ser utilizadas como : nombre de vatriables, funciones, metodos o identificadores de objetos.

//(----------------------------------tipode datos-----------------------------------)

// los tipos de datos le permiten a JS conocer las caracteristicas y funcionalidades que estaran disponibles para ese dato.

//numeros (number) como estan escritos en ingles es mejor separar los decimales con .
let edad = 35;
//cadema de caracteres (string), '' , "".
let nombre = "mama luchetti"
//logicos o booleanos (boolean) true false
let laCharlaEstaReCopada = true

//undefined (valor sin definir)
//let saludo; no tiene valor
//saludo = "¡Hola!" ahora si tiene un valor
//null(valor nulo)lo asignamos nosotros para indicar un valor vacio o desconocido.
// let temperatura = null no llego un dato, algo fallo

// valor NaN es un valor de tipo numerica que representa Not-A-Number.
// indica que el valor pasado no es un numero.
// let nombre = "Esteban"
// console.log("Esteban"-1)---------> NaN

//(--------------------------------operaciones matematicas y de comparaciones-------------------)

// los operadores 
// nos permiten manipular el calor de las valriables, realizar operaciones y comparar sus valores.
// de asigancion let edad = 35; asigna el numero 35 a edad
//Aritmeticos nos permiten hacer péraciones matematicas, devuelven el resultado de la operacion.
//10+15 // suma 25
//10-15 // resta -5
//10*15 // multiplicacion 150
//15/10 // division 1.5
// 15++ es igual a 15+ 1----16
//15-- es igual a 15 - 1----14
//15%5 el resto de dividir 15 entre 5 es 0
//15%2 el resto de dividir 15 entre 2 es 1
// los operadores aritmeticos simpre devolveran el resultado numerico de la operacion que se este realizando

//(------de concatenacion; sirven para unir una cadenas de texto. devuelven otra cadena de texto---)
//let nombre = 'Teodoro';
//let apellido = 'Garcia';
//let nombreCompleto = 'Me llamo' + nombre + ' ' + apellido;
// si mezclamos otros tipos de datos, estos se convierten a cadenas de texto.
//let fila = 'M';
//let asiento = 7;
//let ubicacion = fila + asiento; // 'M7' como string.

//(----------------de comparacion simple------------------)
//10== 15 igualdad false
//10!==15 desigualdad true
//(-----------comparacion estricta----------------)
//10=== "10" igualdad estricta false
//10!== 15 desigualdad estricta true
// en el primer caso el valor es 10 en ambos ejemplos, pero los tipos de datos son number y string. Como
// estamos comparando que ambos (valor y tipo de dato) sean iguales, el resultado es false.
// comparan dos valores, devuelven verdadero o falso
15 < 15 // mayor que false
15 >= 15 // mayor o igual que true
10 < 15 // menor que true
10 <= 15 // Menor o igual que true
//Siempre debemos escribir el simbolo mayor > o menor antes que el = sino java lee primero = 

//(-------------funciones-----------------------)

//function elDoble (unNumero){
    //return unNumero * 2;}

//elDoble(6);//12
//funcion expresada
let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;
}

console.log(sumar(7,9));

//funcion declarada
function restar (numeroC, numeroD){
    return numeroC - numeroD;
}
console.log(restar(10,3));

//ejemplo de scope
let mensaje = 'Chau';
function saludar(){
    let mensaje = 'Chau'
    return mensaje;
}

console.log(mensaje);
console.log(saludar());

// (________________declaracion y estructura-----------------------------)
// es un bloque de codigo que nos permite agrupar una funcionalidad para usarla todas las veces que necesitemos.
// normalmente, realiza una tarea especifica y retorna un valor como resultado.

// estructura basica------------------------------
// function sumas (a, b){
    //return a + b;
//}

// funcion declaradas----------------------------- 
//function saludar(nombre) {
    //return 'Hola' + nombre;
//}

//funciones expresadas----------------------------
// let tripicar = function (numero){
    //return numero * 3;
//}

// invocacion
//podemos imaginar las funciones como si fueran maquinas.
//durante la declaracion nos ocupamos de construir la maquina y durante la invocacion la ponemos a funcionar.

// invocando una funcion___________________________________________
//function hacerHelado() {
    //return 'helado';
//}
// la forma de invocar una funcion es escribiendo su nombre seguido de apertura y cierre de parentesis.
//hacerHelado();
//si una funcion tiene parametros, se los podemos pasar dentro de los parentesis cuando la invocamos. Es importante respetar el orden
//porque JavaScript asignara los valores en el orden en que lleguen.

// function saludar(nombre, apellido) {
    //return 'Hola' + nombre + ' ' + apellido;
//}
//saludar('Robertito', 'Rodriguez'); retornara 'Hola Roberto Rodriguez'
//tambien es importante asignar parametros.

// para caso de definir valores por defecto.
// si agregamos = luego de un parametro, podremos especificar su valor en caso de que no llegue ninguno.

//function saludar(nombre = 'visitante' , apellido = 'anonimo') {
    //return 'Hola ' + nombre + ' ' + apellido;
//}
//saludar(); // retornara 'Hola visitante anonimo'

//guardando los resultados-------------------------
// en caso de querer guardar lo que retorna una funcion, sera necesario almacenarlo en una variable.
// function hacerHelados(cantidad) {
    // return 'helado'.repeat(cantidad);
//}
//let misHelados = hacerHelados(3);
//console.log(misHelado); // Mostrara en consola 'helado helado helado'

//"Llamamos parametros a las variables que escribimos cuando definimos la funcion. Llamamos argumentos a los valores que enviamos cuando 
// invocamos la funcion.

//(---------------------------------Scope----------------------------------------------)
//El scope o ambito se refiere al alcance que tiene una variable, es decir, desde donde podemos acceder a ella. En JavaScript los scopes son definidos principalmente por las funciones.
//(-------------scope local--------------------)
//{codigo}
// function hola(){    
//let saludo = 'Hola ¿que tal?';
//return saludo
//}
//cosolo.log (saludo); // saludo is not defined 
//(---------------scope global---------------------)
//function hola() es una funcion local porq dentro del hola()
// let saludo = 'Hola ¿que tal?' es una funcion glabal por que es fuera de una funcion
// pero desde function el alcance es global.

//&& and dos condiciones es igual es verdadero

// || or valer que una sea verdadera 

// operador concatenacion  nombre + ' ' + apellido
//(------------------condicional_------------------------------------------)
let clima = 'Soleado';
let dia = 'Lunes';

if(clima == 'Soleado' && dia == 'Domingo'){
    console.log ('Lindo dia para pasear');
}
// else 
// else if
// importante necesita un o varias variables
// eje
let clima = 'Soleado';
let dia = 'Lunes';

if(clima == 'Soleado' && dia == 'Domingo'){
    console.log ('Lindo dia para pasear');
}else if( clima == 'Soleado' && dia == 'Lunes'){
    console.log('Podria salir igual');
}else{
    console,log('Mejor me quedo en casa practicando JS');
}
// tener presente que * un if no siempre necesita de un else o else if. *puede tener muchos else if si asi lo quisieras. *siempre que implementes un else , debera existir solo uno de ellos.

/*-------------------------------------------------arrowFunciones--------------------------------------------------------*/
// forma clásica
function sumar(a, b) {
    return a + b;
}
   console.log( sumar(2, 4) ); // 6

   // ES6 arrow function
let sumar = (a, b) => a + b;


  console.log( sumar(2, 4) ); // 6
/*ejmplo*/
let salduo = () => 'Hola Mundo!'
let dobleDe = numero => numero * 2;
let suma = (a, b) => a + b;
let hora Actual =() => {
    let fecha = new Date();
    return fecha.getHours() + ':' +
    fecha.getMinutes();
}
// OPERADORES LOGICOS(------------------------------------------------------------------)//
/*LOGICOS
EXITEN 3 OPERADORES and(&&) o or(||) necacion not
&& false true---->FALSE
true true---------->TRUE 
|| false true--------> true
false false----------->false
not ! niega la condicion si era true sera flase y veceversa
cuestionario para completar

(---------------------------------if/else----------------------------------------)
let clima = 'Soleado';
let dia = 'Lunes';

if( clima == 'Soleado' && dia == 'Domingo' ){
    console.log('Lindo dia para pasear');
}else if(clima == 'Soleado' && dia == 'Lunes' ){
    console.log('Podria salir igual');
}else{
    console.log('Mejor me quedo en casa practicando JS');
}
Condicion simple 
if es la version mas basica. establece una condicion y un bloque de codigo a ejecutar en caso de que sea verdadera.
Condicional co bloqueo else
el bloque else es opcional
if(condicion){
    //codigo a ejecutar si la condicion es verdader
} else {
    // codigo a ejecutar si la condiciojn es falsa 
}
*/
//(-------------falta mas arriaba----------------------------------------ternario switch---------------------------------------)

conficion ? expresion el true: " "
// if ternario es una linea de cofigo resumida para hacer evaluaciones. 
let fruta = "naranja";

let resultado = fruta == 'manzana'? 'buenismo, me gustan las manzanas': 'Ufa, queria manzana';
console.log(resultado);

//switch trabajar con el siempre y cuando quieras evaluar si una exoresion es exactamente igual a un valor esperado.
let semaforo = 'Verde';

switch(semaforo){
    case 'Verde':
        console.log('puedo cruzar');
        break;
    case 'Amarillo':
        console.log('Precaucion');
        break;
    case 'Rojo':
        console.log('No cruces , hay que esperar');
        break;
    default:
        console.log('No funciona el semaforo');
        break;
}




switch(exprecion){ case caso1:
    console.log("secumple el caso 1")

}