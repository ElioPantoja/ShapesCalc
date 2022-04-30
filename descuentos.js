const precioOriginal = 100;
const descuento = 15;

function calcPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
return precioConDescuento;
}
