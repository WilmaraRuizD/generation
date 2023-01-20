
alert("Hola");
const edad = prompt('Ingrese su edad');

const isValidAge=Number(edad) >=18;  //booleano

//Comprobacion de
const conf=confirm("Seguro?");//booleano

console.log(typeof edad);
console.log(conf);
console.log(isValidAge);

//primer ejemplo de condicional 
if((1<3 && 2>3)||(12<200 && 0)){
    alert(`Tu edad es : ${edad} Puedes ingrezar`);
} else{
    alert(`Tu edad es : ${edad } No puede ingresar `)
}

//ejemplo 2 

if(confirm("seguro?") && isValidAge){
  alert("Siga")}
  else {
    alert("Chao");
    }

//cadena ;
let cadena= 'Cual es tu nombre ';
console.log(cadena);
console.log(cadena.trim());
console.log(cadena.length);
console.log(cadena.trim().length);
console.log(cadena.includes("es"));
console.log(cadena.indexOf("n"));
console.log(cadena.slice(8,10));
console.log(cadena.repeat(2));
console.log(cadena.replace("mi","lop"));
console.log(cadena.split(" "));
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

