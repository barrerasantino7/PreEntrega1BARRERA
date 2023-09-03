//Este proyecto busca generar un sistema de cambio de monedas donde el usuario ingresa el nombre de la moneda que quiere y después ingresa la cantidad de pesos argentinos que tienen para converir.
//Monedas disponibles.
const dolar = 740;
const euro = 379.51;
const pesoMex = 20.90;
const pesoUru = 9.31;
const yuan = 48.22;
const realBr = 71.12;

//Variables que establecerá el usurario.
let pesoArg
let moneda

//Función para convertir las monedas a pesos argentinos.
const convertir = (a,b) => a / b;

let ok = 15 //Variable para determinar cuando terminará el ciclo.

do{//Ciclo, se repetirá las veces que el usuario escriba mal una palabra y terminará cuando el el calculo de la moneda sea correcto.

moneda = prompt("Elija una de las monedas que quieras convertir a Pesos Argentinos: dolar, euro, peso mexicano, peso uruguayo, yuan, real.")
pesoArg = prompt("Ingresa la cantidad de pesos argentinos que tengas y quieras convertir.")

if (moneda == "dolar"){
console.log(convertir(pesoArg, dolar));
ok = 15

}else if (moneda == "euro"){
    console.log(convertir(pesoArg, euro));
    ok = 15

}else if (moneda == "peso mexicano"){
    console.log (convertir(pesoArg, pesoMex)); 
    ok = 15

}else if (moneda == "peso uruguayo"){
    console.log(convertir(pesoArg, pesoUru));
    ok = 15

}else if (moneda == "yuan"){
    console.log(convertir(pesoArg, yuan)); 
    ok = 15

}else if (moneda == "real"){
    console.log(convertir(pesoArg, realBr)); 
    ok = 15

} else{
    alert("¡Alguno de los datos ingresados no es correcto!") //Este alert sirve para avisar al usuario que escribió con alguna falta de ortografia el nombre de la moneda.
    ok = 10
    
    
}
}while(ok == 10)// Condicional que mantiene el ciclo.



