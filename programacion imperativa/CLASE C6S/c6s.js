/*calculadora*/
/*2 sumar*/
function sumar(num1, num2){
    return num1 + num2;
}
/*3 restar*/
function restar(num1, num2){
    return num1 - num2;
}
/*4 multiplicar*/
function multiplicar(num1, num2){
    return num1 * num2;
}
/*5 dividir*/
function dividir(num1, num2){
    return num1 / num2;
}
/*calculadora2*/
console.log("***** NIVEL II - Testeo de Calculadora*****");
let rdoSuma = sumar(6, 4);
console.log("El resultado de la suma es: " + rdoSuma);
let rdoResta = restar (16, 4);
console.log("El resultado de la resta es: " + rdoResta);
/*3*/
let rdoMultiplicacion = multiplicar(2,20);
console.log("El resultado de la multiplicacion es: " + rdoMultiplicacion);
/*4*/
let rdoDivision = dividir(100,5);
console.log("el resultado de la division es: " + rdoDivision);
/*5*/
let rdoDivision = dividir(100, 0);
console.log("El resultado de la division es: " + rdoDivision);

/*calculadora nivel III*/
/*1*/
function cuadradoDeUnNumero(num){
    return multiplacar(num,num)
}
/*2*/
function promedioDeTresNumeros(num1,num2,num3){
    let sum = sumar(num1, num2);
    return sumar(sum,num3)/3;
}
/*3*/
function calcularPorcentaje(numero,porcentaje){
    return multiplicar(numero, dividir(porcentaje,100));
}
/*4*/
function generadorDePorcentaje(num1, num2){
    let primeraOperacion = multiplicar(num1, 100)
    let segundaOperacion = dividir(primeraOperacion, num2);
    return segundaOperacion;
}


