/* Nivell 2 */

calculadora();

function calculadora (){
    let operador=prompt("Ecriu el tipus d'operació que vols realizar; opcions: +, - , * ó /");
    let valor1=parseInt(prompt("Ecriu el primer valor de la operació"));
    let valor2=parseInt(prompt("Ecriu el segon valor de la operació"));

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

        case "/":
            if (valor2===0){
                alert("El denominador (el segon valor) no pot ser zero, dona error, si us plau torni a indicar un altre divisor");
                calculadora();
            } else{ 
                let divisio=valor1/valor2;
                document.getElementById("calculadora").innerHTML="El resultat de "+valor1+" / "+valor2+" es = "+divisio;}
            break;
        
        default: alert("L'operador indicat no es troba dins de les possibles opcions")
    }
}