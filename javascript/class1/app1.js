alert('Hola mundo ');
let year = 2023;
let yearInRegister=200;

let ageCurrent = year-yearInRegister;

console.log(ageCurrent);

let num1=2;
let num2=4;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(((num1 - num2 )*2/(2)-2+1-100));
console.log(-102)

console.log(3**2);

//se asigna de derecha a ezquierda ;
num1 = num1 + 2 ; 

//num1=num1+10;
num1 += 12;

//num1=num1-10;
num1-=12;
//num1=num1*10;
num1*=12;
//num1=num1/10;
num1/=12;
//num1=num1%10;
num1%=12;
//num1=num1**10;
num1*=12;

//asignacion de incremento 
++num1; //Pre incremento
num1++; //post incremento

--num1;//pre decrement
num1--;//post incremento

//calculo landa ;

let num3 ='3'; let num4=3;
num3 <num4 ; //menor que 
num3 > num4  ; //mayor que 
num3 === num4 ; //igual que 
num3 !== num4 ; //diferente que 

if(2<4){
console.log('Hola ');
}else{
    console.log('Chao');
}

if(22%2===0){
    console.log('Es par');
}else{
    console.log('No es par');
}

//funciones 

function isPar(numb){
    if( numb %2===0){
        console.log('Es par');
    }else{
        console.log('No es par');
    }

}

console.log(isPar(8));