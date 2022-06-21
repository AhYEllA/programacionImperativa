/*1*/
function siguientes10(limite){
    for (let i=0; i<=10; i++){
        console.log(limite+i)
    }
}
siguientes10(50)
/*2*/
for(let i=5; i<=20 ; i+=3){
    console.log(i);
}
/*3*/
function mostrarSumatoria(){
    let sumatoria = 0;
    for(let i=0 ; i<=100 ; i++){
        sumatoria += i;
    }
    return sumatoria;
}
let resultado = mostrarSumatoria();
console.log("La sumatoria de los numeros del 0 al 100 es: " + resultado);
/*4*/
function calculadoraFactorial(num){
    let resultado = 1;
    for(let i=1 ; i<=num ; i++){
        resultado = resultado * i;
    }
    return resultado;
}
let factorial = calcularFactorial(3);
console.log("El factorial de 3 es: " + factorial);
/*5*/
// Forma de resolverlo numero 1 //
function fibonacci1(num){
    let primerNum = 0;
    let segundoNum = 1;
    let resultado = 0;

    while(resultado <= num){
        /*Este if se coloca solo para evitar que la primer suma
se muestre dos veces, de otro modo por la logica implementada
quedará:
0 + 1 = 1
1 + 0 = 1
(Comprobar por consola sin el if en caso de ser necesario)
*/
if(primerNum==1 && segundoNum==0){
    primerNum=1;
    segundoNum=1;
    resultado= primerNum+segundoNum;
} else{
    resultado = primerNum + segundoNum;
}
console.log( primerNum + " + " + segundoNum + " = " + resultado);
segundoNum = primerNum
primerNum = resultado;


}


let numero = parseInt(prompt("Ingrese el numero seleccionado: "));
fibonacci1(numero);
//Forma de resolverlo numero 2 //
function fibonacci2(num){
    let numero = [0,1];
    for(let i=2 ; i<=num ; i++){
        numero[i] = numero [i-1] + numero[i-2];

        console.log("\n" + numero[i-1] + " + " + numero[i-2] + " = " + numero[i]);
    }
}
let numero = parseInt(prompt("Ingrese el numero seleccionado: "));
fibonacci2(numero);