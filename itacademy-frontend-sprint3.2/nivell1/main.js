
/* Exercici 1.1.
Crea un array amb el teu nom on cada posició correspongui a una lletra.
Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.*/

let nom=["M","A","R","C","E","L","A"];

for (let i=0; i<nom.length; i++){
    let escriu = nom[i];
    console.log(escriu);
}

/* Exercici 1.2. 
Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. 
Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
Si trobes un número, mostra per pantalla: 
‘Els noms de persones no contenen el número: __’ */

let paraula=["M","A","R","C","E","L","A"];

for (let i=0; i<paraula.length; i++){
    if (paraula[i]==="A" || paraula[i]==="E" || paraula[i]==="I" || paraula[i]==="O" || paraula[i]==="U") {

        let fraseVocal = paraula[i];
        console.log("He trobat la VOCAL: "+fraseVocal);
    } 
    else {
        let fraseConsonant = paraula[i];
        console.log("He trobat la CONSONTANT: "+fraseConsonant);
    }
    
}

/* Exercici 1.3.
Emmagatzemar en un Objecte o Map les lletres de l'array y el nombre de vegades que apareixen. 
Nota: Hauràs de crear un bucle que vagi comprovant cada lletra del teu nom i actualitzant 
els comptadors, que són cada camp del objete o Map.*/

let arrayLletres=["M","A","R","C","E","L","A"];
let lletres= new Map();

for (let i=0; i<arrayLletres.length; i++){

    if (lletres.has(arrayLletres[i])===true){
        let letra = lletres.get(arrayLletres[i]);
        letra = letra +1;
        lletres.set(arrayLletres[i], letra)
    } else{
        lletres.set(arrayLletres[i],1);
    }

    let mapIter = lletres.entries();
    console.log(mapIter);
}


/* Exercici 4
Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre 
la primera i la segona. És a dir, partim de 
'array name i surname i al acabar l’execució només tindrem una que es dirà fullName. */

let arrayName=["M","A","R","C","E","L","A"];
let arrayEspai=[" "];
let arraySurname=["S","C","H","E","V","E","L","O","F","F"];
let arrayFullName= arrayName.concat(arrayEspai).concat(arraySurname);


console.log(arrayFullName);