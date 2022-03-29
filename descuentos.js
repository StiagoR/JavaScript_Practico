const originalPrice = 100;
const Discount = 12;

 function calculatePriceToPayWithDiscount (originalPrice,Discount){
    const percentageDiscountApplied = (Discount*originalPrice);
    const priceDiscount = originalPrice - (percentageDiscountApplied / 100);
    
    return (priceDiscount);
 }

//  console.log(`El precio original es: $${precioOriginal} y con el descuento del ${descuento}% quedaria en: $${precioConDescuento}`);
function PriceWithDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const valueP = Number(inputPrice.value);
    const valueD = Number(inputDiscount.value);
    const priceDiscountApplied = calculatePriceToPayWithDiscount(valueP,valueD);
    
    const Result = document.getElementById("ResultP");
    Result.innerText = "The total price to pay with a discount of " + valueD +"% " + "is $" + priceDiscountApplied;
    // return alert( "El precio total a pagar con descuento de " + valueD +"% " + "es de " + priceDiscountApplied);
}
// 
 //El precio original es: $120 y con el descuento del 15% quedaria en: $102