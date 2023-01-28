/*
alert("Hola mundo ");

const vector=[];
let palabras="";


let num=prompt("¿Cuantas palabras desea ingresar a su arreglo ");
console.log(num);
for(let i=0;i<num ;i++){
 vector.push(prompt("ingrese la palabra "));
 console.log(vector);

}

let frase=vector.join(' ');
console.log(frase);
*/
////////funtion palindrome 


function cantidadPalabras(frase1){
    console.log(frase1)
    const fraseSinEspacio=frase1.trim();
    console.log(fraseSinEspacio);
    const fraseSinEspacio1=fraseSinEspacio.replace(/[ ]{2,}/gi, '');
    console.log(fraseSinEspacio1);
   
    const numFrase=fraseSinEspacio1.split(' ').length;
    console.log(fraseSinEspacio1.split(' '));
    const frase2= fraseSinEspacio1.split(' ');
    
    console.log(numFrase);
   for(let i=0;i<numFrase;i++){
    palindrome(frase2[i]);
  // console.log("Se esta repitiendo "+i);
       
    }

}



function palindrome(palabra){
const palabraSinEspacio=palabra.trim();
const palabraSeparada=palabraSinEspacio.split("");
const reverse=palabraSeparada.reverse();
const palabraUnida=reverse.join('');
//return palabra===palabraUnida;

if(palabraUnida===palabra){
console.log(`La ${palabra} es palindrome`);
return true;

}else{
    console.log(`la ${palabra} no es palindrome`);
    return false;
}

}

 console.log(palindrome('oso'));
console.log(palindrome('Hola'));
console.log(palindrome('somos y somos'));

cantidadPalabras("    somos y   somos  ");