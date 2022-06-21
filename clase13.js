/*Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.*/
/*function loopDeimpares(valor, palabra){
let variable1;    
    for (let i=0; i<= 100; i++){
        console.log(i)
        variable1= i+valor;
        if(variable1%2==1){
            console.log('El numero' , variable1,'es par')
        }
    }

}
loopDeimpares()*/

/*function sumatoria(num){
    let suma=0;
    for (let i=num; i>= 1; i--){
        suma += i;

    }
return suma;
}                 ---------------------------bien hecha---------------------


console.log (sumatoria(3))*/






/*Nuevo arreglo
Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]*/
function nuevoArreglo(num){
    let nuevoArreglo = [];
    for (let i = 1; i<=num; i++) {
        nuevoArreglo.push(i)

    }
    return nuevoArreglo
}
console.log(nuevoArreglo(4))
