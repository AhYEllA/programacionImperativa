/*1*/
function pulgadasACm(pulgadas){
    return pulgadas * 2.54;
}
console.log(pulgadasACm(5));
/*2*/
function pasoAUrl(string){
    return "http://www."+ string + ".com"
}
console.log(pasoAUrl("leandro"));
/*3*/
function admirador(palabra){
    return palabra + "!!!"
}
console.log(admirador("Bienvenidos"))
/*4*/
function edadPerro(edadHumano){
    return edadHumano * 7;
}
console.log(edadPerro(27))
/*5*/
function calculadorDeSueldo(precioPorHora){
    return precioPorHora * 40;
}
console.log(calculadorDeSueldo(950));
/*6*/
function imc(pesoEnKg, alturaEnM){
    return pesoEnKg / (alturaEnM * alturaEnM);
}
console.log(imc(83, 1.73));
/*7*/
function pasarAMayuscuculas(frase){
    return frase.toUpperCase();
}
console.log(pasarAMayuscuculas("El dia esta muy frio"));
/*8*/
function tipoDeDato(valor){
    return typeof valor;
}
console.log(tipoDeDato(false));
console.log(tipoDeDato(undefined));
console.log(tipoDeDato("false"));
console.log(tipoDeDato(15));
/*9*/
function circunferenciaDeCirculo(radio){
    return 2 * Math.PI * radio;
}
console.log(circunferenciaDeCirculo(2));

