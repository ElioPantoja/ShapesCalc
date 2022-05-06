/* const precioOriginal = 100;
const descuento = 15; */


function calcPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function priceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    
    const precioConDescuento = calcPrecioConDescuento(priceValue,discountValue)
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio final es: $" + precioConDescuento
    
}