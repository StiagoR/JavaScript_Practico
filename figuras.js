// Codigo del Cuadrado 
console.group("Cuadrado");

var lado = 5;
console.log("Los lados del cuadrado miden" + " " + lado + "cm");

var perimetroCuadrado = lado * 4;
console.log("el perimetro del cuadrado es" + " " + perimetroCuadrado + "cm");

var areaCuadrado = lado ** 2;
console.log("el área del cuadrado es" + " " + areaCuadrado + "cm^2");

console.groupEnd();
// Codigo del Triangulo
console.group("Triangulo");

var lado1 = 6;
var lado2 = 6;
var Base = 4;

console.log("Los lados del Triangulo miden" + " " + lado1 + "cm, "+ lado2 + "cm, " + Base + "cm");

var perimetroTriangulo = lado1 + lado2 + Base;
console.log("el perimetro del Triangulo es" + " " + perimetroTriangulo + "cm");

var altura = 5.5;
console.log("La Altura del Triangulo es" + " " + altura + "cm");

var areaTriangulo = ((Base * altura) /2 )
console.log("El área del Triangulo es" + " " + areaTriangulo + "cm^2");

console.groupEnd();
// Codigo del Circulo
console.group("Circulo");
var radio = 4;
console.log("El radio del circulo es" + " " + radio + "cm");

var diametro = radio * 2;
console.log("El diametro del circulo es" + " " + diametro + "cm");

var PI = Math.PI;
console.log("El valor de PI es" + " " + PI );

var perimetroCirculo = PI * diametro;
console.log("El perimetro del circulo es" + " " + perimetroCirculo);

var areaCirculo = PI * (radio * radio);
console.log("El área del Circulo es" + " " + areaCirculo + "cm^2");

console.groupEnd();
