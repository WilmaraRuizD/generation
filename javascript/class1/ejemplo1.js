//tipos de datos 

let recipiente="pedro";

alert(recipiente);

let string1="cadena de texto";//texto
let num= 11 ;   //number
let bool=false ;//booleano


/** var let const  */

let variable = 12;

const nombre ="wilmara";

//esto es error dado que no se puede redefinir una variable
// nombre=andreina ;

//casos especiales de dato 
//undefined , null , Nan 

/**declarar inicializar y  */

let name ; 
name ='Mara';
console.log(typeof name);

let num1, num2, num3;
num1 =8;
num2 =2;
num3 =5;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

//se define que el valor es nulo 
let numero = null ;
console.log(typeof numero);

//NaN
let numer1=5;
let numer2="pedro";

console.log(typeof numer1*numer2);//resultado debe ser no es de tipo numero

//funcion prompt 
prompt('Hola Wilmara Ruiz ');

let apellido=prompt('Cual es tu apellido');
console.log(apellido);