/*Si quisiéramos restringir el acceso a una discoteca, tendríamos que saber si la
persona es mayor o menor de edad, esto lo podríamos resolver con una condición
muy sencilla. ¿Qué opinas de nuestro programa para filtrar el acceso?*/
/*if (edad>=18){
    console.log("Puede pasar")
}else{
    console.log("No puede pasar")
}
let edad = 0;
if (edad <= 0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad < 18){
    console.log("No podes pasar!!");
}else{
    if (edad < 21){
    console.log("Podes pasar pero no podes tomar alcohol!");
    } else{
        if(edad % 2 !== 0){
            console.log("Sabias que tu edad es impar??");
            console.log("Podes pasar, felicidades por haber llegado a la mayoria de edad!!");
        } else{
            console.log("Podes pasar, felicidades por haber llegado a la mayoria de edad!!");

        }
    }
}

/* total a pagar*//*
function totalAPagar(vehiculo, litrosConsumidos){
    let total = 0;
    if (vehiculo === "coche"){
        total = litrosConsumidos * 86;
    } else if (vehiculo === "autobus"){
        total = litrosConsumidos * 55;
    } else if (vehiculo === "moto"){
        total = litrosConsumidos * 70;
    } else {
        return "por favor ingrese un tipo de vehiculo valido";
    }
    if (litrosConsumidos >= 0 && litrosConsumidos <= 25){
        total = total + 50;
    } else {
        total = total + 25;
    }
    return "El total a pagar es de: $" + total;
} console.log(totalAPagar("coche", 55));*/

/*Sanwiches*/
const prompt = require("prompt-sync")({ sigint: true });
let = prompt('que gustas' )

function creadorSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza)

{
    let total = 0;
    if (base === "carne") {total += 200; 
    } else if (base === "pollo") 
    {total += 150;} else if (base === "veggie") {total += 100;
    } else { return "Por favor ingrese un tipo de sandwich correcto.";} 
    if (pan === "blanco") {total += 60;}
    else if (pan === "s/gluten"){total += 75;}
    else { return "Por favor ingrese un tipo de pan correcto.";}
    if (queso){
        total += 20;
    } if (tomate){
        total += 15;
    } if (lechuga){
        total += 15;
    } if (mayonesa){
        total += 5;
    } if (mostaza){
        total += 5;
    } return "El total a pagar es de: $" + total;
}    console.log(creadorSandwich("pollo", "blando", true, false, true, true, false, true));

/*extra bonus*/
function numeroSecreto(miNumero){
    let secretNum = Math.floor(Math.random() * 10) + 1;
    if (typeof miNumero !== "number"){
        return "Error, el elemento debe ser de tipo numero, por favor reintente."
    } else if  (miNumero === secretNum){
        return "Felicidades, adivino el numero secreto!!";
    } else { return( "Lo sentimos, su numero ingresado: " + miNumero + "difiere del numero secreto: " + secretNum + ". Intentelo nuevamente!!"
    );}

}

/* Abrir Paracaidas()*/
function abrirParacaidas(velocidad, altura){
    if (velocidad < 1000){
        if (altura >= 2000 && altura < 3000){
            return "Abriendo Paracaidas...";
        
        } else { return ("La altura debe encontrarse entre 2000 y 3000 metros de altura. Actual: " + altura + "m");}
        else { return ("La velocidad debe ser menor a 1000 km/h. velocidad actual: " + velocidad + " km/h");}
    
    }
}

/* ESTRUCTURA SWITCH*/
function traductorCondicional(str) {
    switch (str) {
        case "casa" :
            return "house";
        case "perro":
            return "dog";
        case "arbol":
            return "tree";
        case "pelota":
            return "ball";
        case "genio":
            return "genie";
            
        default:
            return "Por favor ingrese una palabra válida en español";
    }

}
/*Valoracion de Peliculas*/
function valoracionDePeliculas(valoracion){
    switch (valoracion){
    case "muy mala":
    case "mala":
    case "mediocre":
        return `Calificaste a la película como ${valoracion}, lo sentimos mucho. Gracias por habernos visitado, que tengas buen dia!!`;
    case "buena":
    case "muy buena":
    return `Calificaste a la película como ${valoracion}, nos alegra que la hayas disfrutado!!. Gracias por habernos visitado, que tengas buen dia!!`;
    default: 
    return "Ingresaste un valor inválido";}
            
}
