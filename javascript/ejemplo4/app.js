alert("Hola mundo");

function compararNum() {
const var1 = prompt("introdusca el primer numero");
const var2 = prompt("introdusca el primer numero");
const var3 = prompt("introdusca el primer numero");
    //se compara si hay algun numero igual
    if (var1 === var2 === var3) {
        document.getElementById("resultado").innerHTML = `<p>Todos los números son iguales ${var1}</p>`
    } else if (var1 === var2 == !var3) {
        document.getElementById("resultado").innerHTML = `<p>El número mayor es ${var1} y ${var2} es igual</p><p>El número ${var3} es diferente</p>`
    } else if (var2 === var3 == !var1) {
        document.getElementById("resultado").innerHTML = `<p>El número mayor es ${var2} y ${var3} es igual</p><p>El número ${var1} es diferente</p>`
    } else if (var1 === var3 == !var2) {
        document.getElementById("resultado").innerHTML = `<p>El número mayor es ${var1} y ${var3} es igual</p><p>El número ${var2} es diferente</p>`
    } else {
        //se compara si los numeros son total mente diferentes
        if ((var1 > var2) && (var1 > var3)) {
            console.log(`${var1}es mayor`)
            if (var2 > var3) {
                document.getElementById("resultado").innerHTML = `<p>El número mayor es ${var1}</p><p>El número del medio es ${var2}</p><p>El número menor es ${var3}</p>`
            } else {
                document.getElementById("resultado").innerHTML = `<p>El número mayor es ${var1}</p><p>El número del medio es ${var3}</p><p>El número menor es ${var2}</p>`
            }
        } else if ((var2 > var1) && (var2 > var3)) {
            console.log(`${var2}es mayor`)
            if (var1 > var3) {
                document.getElementById("resultado").innerHTML =`<p>El número mayor es ${var2}</p><p>El número del medio es ${var1}</p><p>El número menor es ${var3}</p>`
            } else {
                document.getElementById("resultado").innerHTML = `<p>El número mayor es ${var2}</p><p>El número del medio es ${var3}</p><p>El número menor es ${var1}</p>`
            }
        } else if ((var3 > var1) && (var3 > var2)) {
            console.log(`${var3}es mayor`)
            if (var1 > var2) {
                document.getElementById("resultado").innerHTML = `<p>El número mayor es ${var3}</p><p>El número del medio es ${var1}</p><p>El número menor es ${var2}</p>`
            } else {
                document.getElementById("resultado").innerHTML = `<p>El número mayor es ${var3}</p><p>El número del medio es ${var2}</p><p>El número menor es ${var1}</p>`
            }
        }
    }
}
