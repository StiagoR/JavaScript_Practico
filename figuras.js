// Codigo del Cuadrado 
console.group("Cuadrado");

// var lado = 5;
// console.log("Los lados del cuadrado miden" + " " + lado + "cm");

// var perimetroCuadrado = lado * 4;
// console.log("el perimetro del cuadrado es" + " " + perimetroCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado*4;
    // var periC = lado *4
    // return console.log("el perimetro del cuadrado es" + " " + periC + "cm"); 
}

// var areaCuadrado = lado ** 2;
// console.log("el área del cuadrado es" + " " + areaCuadrado + "cm^2");

function áreaCuadrado (lado){
    return lado*lado;
    // var áreaC = lado**2;
    // return console.log("el área del cuadrado es" + " " + áreaC + "cm"); 
}

console.groupEnd();
// Codigo del Triangulo
console.group("Triangulo");

// var lado1 = 6;
// var lado2 = 6;
// var Base = 4;

// console.log("Los lados del Triangulo miden" + " " + lado1 + "cm, "+ lado2 + "cm, " + Base + "cm");

// var perimetroTriangulo = lado1 + lado2 + Base;
// console.log("el perimetro del Triangulo es" + " " + perimetroTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, Base){
    return lado1+lado2+Base;
    // var perimetroT = lado1 + lado2 + Base;
    // return console.log("el perimetro del Triangulo es" + " " + perimetroT + "cm"); 
}

// var altura = 5.5;
// console.log("La Altura del Triangulo es" + " " + altura + "cm");

// function alturaTriangulo (altura){
//     return console.log("La Altura del Triangulo es" + " " + altura + "cm"); 
// }
const alturaTriangulo = document.getElementById("inputTriangleH");
const altura = altura.value;

// var areaTriangulo = ((Base * altura) /2 )
// console.log("El área del Triangulo es" + " " + areaTriangulo + "cm^2");

function areaTriangulo (Base, altura){
    return ((Base * altura) /2 );
    // var áreaT = ((Base * altura) /2 );
    // return console.log("El área del Triangulo es" + " " + áreaT + "cm"); 
}

console.groupEnd();
// Codigo del Circulo
console.group("Circulo");

// var radio = 4;
// console.log("El radio del circulo es" + " " + radio + "cm");

function radioCirculo (radio){
    return console.log("El radio del circulo es" + " " + radio + "cm"); 
}

// var diametro = radio * 2;
// console.log("El diametro del circulo es" + " " + diametro + "cm");

function diametroCirculo (radio){
    var diametroC = radio * 2;
    return console.log("El diametro del circulo es" + " " + diametroC + "cm"); 
}

var PI = Math.PI;
console.log("El valor de PI es" + " " + PI );


// var perimetroCirculo = PI * diametro;
// console.log("El perimetro del circulo es" + " " + perimetroCirculo);

function perimetroCirculo (radio){
    const PI = Math.PI;
    const diametroC = radio * 2;
    return diametroC * PI;
    // const perimetroC = diametroC * PI
    // return console.log("El perimetro del circulo es" + " " + perimetroC + "cm"); 
}

// var areaCirculo = PI * (radio * radio);
// console.log("El área del Circulo es" + " " + areaCirculo + "cm^2");

function áreaCirculo (radio){
    const PI = Math.PI;
    return PI * (radio * radio);
    // var áreaC = PI * (radio * radio);
    // return console.log("El área del Circulo es" + " " + áreaC + "cm"); 
}


console.groupEnd();

// Funciones que interactuan con HTML
function calculatePerimeterSquare(){
    const input = document.getElementById("inputSquare");
    const value = Number(input.value);
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calculateAreaSquare(){
    const input=document.getElementById("inputSquare");
    const value = Number(input.value);
    const area = áreaCuadrado(value);
    alert(area);
}

function calculatePerimeterTriangle(){
    const inputA = document.getElementById("inputTriangleA");
    const valueA = Number(inputA.value);
    const inputB = document.getElementById("inputTriangleB");
    const valueB = Number(inputB.value);
    const inputBase = document.getElementById("inputTriangleBase");
    const valueBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(valueA,valueB,valueBase);
    alert(perimetro);
}

function calculateAreaTriangle(){
    const inputBase = document.getElementById("inputTriangleBase");
    const valueBase = Number(inputBase.value);
    const inputH = document.getElementById("inputTriangleH");
    const valueH = Number(inputH.value);
    const area = areaTriangulo(valueBase,valueH);
    alert(area);
}

function calculatePerimeterCircle(){
    const input = document.getElementById("inputCircleRadio");
    const valueR = Number(input.value);
    const perimetro = perimetroCirculo (valueR);
    alert(perimetro);
}

function calculateAreaCircle(){
    const input = document.getElementById("inputCircleRadio");
    const valueR = Number(input.value);
    const area = áreaCirculo(valueR);
    alert(area);
}