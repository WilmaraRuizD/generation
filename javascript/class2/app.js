const vector=[2,undefined, 'wilmara',true, null ];

const matriz=[2,1,4,[21,12],[1,5]]

console.log(matriz[4][1]);

const matriz1=[ 2, 1, 4 [21,12], [1[[2,232,[45,123,[null,'perdido']]],'Hola']]];
//  console.log[4][1][0][2][2][1]; 

console.log(( vector.length));
console.log( vector.push(32) );
console.log(vector.unshift(21))
console.log(vector.pop());
console.log(vector.shift());

const a = structuredClone(vector);

const dynosAndFriends=['🍔','🍔','🍔','🍔'];

const clone= structuredClone(dynosAndFriends);

clone [2][0]='😜';

console.log(dynosAndFriends);
console.log(clone);

///ciclo for 
for(let index = 0; index <= 3 ; index++){
    console.log("itera" + index);
}

/// ciclo while 
let iterador=0;

while (iterador < vector.length){
    console.log(vector[iterador]);
    iterador++;

}


let Attempts=0;

while(Attempts<3){
    const password = prompt("ingrese la contraseña ");
     
    if(password==="123abc"){
        alert("Constrase correct");
        Attempts=3;
    } else{
        Attempts++;
        alert(`A password Incorrect, number of attemps ${Attempts}`)
    }

}