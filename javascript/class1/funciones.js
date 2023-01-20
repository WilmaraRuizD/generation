
//funcion declarada 

function sumNumbers(num1,num2){
    return num1+num2;
}

let result=sumNumbers(12,5);

console.log(sumNumbers(9,5));
console.log(result);

//funcion asignada 
            //funcion anonima 
const suma = function(num1,num2){
num1++;
return num1+num2;
}

console.log(suma(54,2));


function promNotas(n1,n2,n3,n4,n5){
    return (n1+n2+n3+n4+n5)/5
}

console.log(promNotas(2,3,5,2,1));
console.log(promNotas(5,4,5,1,1));
console.log(promNotas(4,1,5,2,1));

function promedioNotas(n1,n2,n3,n4,n5){
    n1=Number(n1);
    n2=Number(n2);
    n3=Number(n3);
    n4=Number(n4);
    n5=Number(n5);

    return(n1+n2+n3+n4+n5)/5
}

let ln1=prompt('ingrese el valor de la nota 1');
let ln2=prompt('ingrese el valor de la nota 2');
let ln3=prompt('ingrese el valor de la nota 3');
let ln4=prompt('ingrese el valor de la nota 4');
let ln5=prompt('ingrese el valor de la nota 5');

console.log(promedioNotas(ln1,ln2,ln3,ln4,ln5));

document.querySelector("#btn1").addEventListener("click",)

//arrumfusion 

const suma2=(num1,num2)=>{
    num1+num2;
}