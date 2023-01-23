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

////////funtion palindrome 

function palindrome(palabra){

const palabraSeparada=palabra.split("");
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

palindrome('oso');
palindrome('Hola');
palindrome('somos');