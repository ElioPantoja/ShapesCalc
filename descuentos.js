/* const precioOriginal = 100;
const descuento = 15; */
const cupones = ["quierodescuento", "25off", "lovimasbarato"]

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

const isChecked = document.getElementById("CheckCoupon")
isChecked.addEventListener("click",couponClick);

function couponClick(){
    if (isChecked.checked == true) {
        document.getElementById("InputDiscount").style.display = "none";
        document.getElementById("labelInputDiscount").style.display = "none";
        document.getElementById("inputCoupon").disabled = false;
        console.log("esta marcado")
    }else{
        document.getElementById("InputDiscount").style.display = "";
        document.getElementById("labelInputDiscount").style.display = "";
        document.getElementById("inputCoupon").disabled= true;
        console.log("no esta marcado")
    }
}