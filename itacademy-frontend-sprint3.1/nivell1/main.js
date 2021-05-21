
/* exercici1 */
console.log("Hola mundo");

/* exercici2 */
alert("Soy la Marcela");

/* exercici3 */
let nombre = "Marcela";
let apellido = "Scheveloff";

console.log(nombre+" "+apellido);

/* exercici4 */
let primero = 10;
let segundo = 5;

console.log("La suma del "+primero+" y el "+segundo+" suman "+(primero+segundo));

/* exercici5 */
let notaexamen= 4.95;
alert(`tu nota del examen ha sido de: ${notaexamen}`);

if(notaexamen < 5){
    alert("Nos vemos en la recuperacion");
} else {
    alert("FELICIDADES HAS PASADO EL EXAMEN CON UN "+notaexamen);   
}

/* exercici6 */
let frase = "Tinc un cotxe de color blau";
frase = frase.replace("blau","verd");
alert(frase);

let frase2 = "Tinc un cotxe de color blau";
frase3 = frase2.replace(/o/gi,"u");
alert(frase3);

/* exercici7 */
let taula="taula";
let cadira="cadira";
let ordinador="ordinador";
let llibreta="llibreta";
let objectes=[taula,cadira,ordinador,llibreta];
let objecte="";

for(i=0; i< objectes.length; i++) {
    console.log("L'objecte "+objectes[i]+" està a la posició "+i);
} 

/* exercici8 */

let operador=prompt("Ecriu el tipus d'operació que vols realizar; opcions: +, - ó *");
let valor1=parseInt(prompt("Ecriu el primer valor de la operació"));
let valor2=parseInt(prompt("Ecriu el primer valor de la operació"));
calculadora(operador,valor1,valor2);

function calculadora (operador,valor1, valor2){

    switch (operador){
        case "+":
            let suma=valor1+valor2;
            document.getElementById("calculadora").innerHTML="El resultat de "+valor1+" + "+valor2+" es = "+suma;
            break;

        case "-":
            let resta=valor1-valor2;
            document.getElementById("calculadora").innerHTML="El resultat de "+valor1+" - "+valor2+" es = "+resta;
            break;
            
        case "*":
            let multiplicacio=valor1*valor2;
            document.getElementById("calculadora").innerHTML="El resultat de "+valor1+" * "+valor2+" es = "+multiplicacio;
            break;
        
        default: alert("L'operador indicat no es troba dins de les possibles opcions")
    }
}






