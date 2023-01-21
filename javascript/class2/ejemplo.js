//Declaration of variables:

const vector1 = [];
let Attempts = 10;

//principal function
function adivina() {

    while (Attempts > 0) {


        const numberUser = prompt(`ingrese un numero del 0 - 9 `);
        let randonNumber = generateRandom();
        const wholeVector = vector1.push(numberUser);

        console.log("esto es numero del usuario : " + numberUser);
        console.log(wholeVector);

        //Yes numberUser != randonNumber
        if (numberUser != randonNumber) {
            Attempts--;
            if (Attempts === 0) {
                document.getElementById("container1").innerHTML =
                    `<p>Lo siento perdiste. 😭😭</p>`
            } else {
                alert(`No adivinaste, tienes ${Attempts} intento`)
            }
            //yes numberUser === randonNumber      
        } else {
            document.getElementById("container1").innerHTML =
                `<p>Excelente, adivinaste 🎉🎉</p>
        <P>Sus intentos fueron : ${wholeVector}. <br>
        Sus números insertados fueron. ${vector1}</P>`;

            console.log(vector1);
            Attempts = 0;
        }
    }

}

//function randonNumber. 

function generateRandom() {
    min = 0;
    max = 9;
    var x = Math.floor(Math.random() * (max - min) + min);
    console.log("esto es numero aleatorio : " + x);
    return x;
}