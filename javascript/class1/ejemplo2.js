//se define las variables
let a, b, hipotenusa, area;

const lado1 = prompt('por favor ingrese el lado 1 del triangulo');
const lado2 = prompt('por favor ingrese el lado 2 del triangulo');
const lado3 = prompt('por favor ingrese el lado 3 del triangulo');

//determina el valor de la hipotenusa 
if ((lado1 > lado2) && (lado1 > lado3)) {
    hipotenusa = lado1;
    a = lado2;
    b = lado3;
    alert(`la hipotenusa es ${hipotenusa}`);
} else if ((lado2 > lado1) && (lado2 > lado3)) {
    hipotenusa = lado2;
    a = lado1;
    b = lado3;
    alert(`la hipotenusa es  ${hipotenusa}`);
} else {
    hipotenusa = lado3;
    a = lado1;
    b = lado2;
    alert(`la hipotenusa es   ${hipotenusa}`);
}
//area y determina si es triangulo rectangulo 
if ((Math.pow(hipotenusa, 2)) === ((Math.pow(a, 2)) + (Math.pow(b, 2))))
// if((hipotenusa**2) === (a**2)+(b**2))
{
    area = (a + b) / 2;
    console.log(area)
    alert(`Es un triangulo rectangulo y su area es ${area}`)
} else {
    alert("No es un triangulo rectangulo");
}