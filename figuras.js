//Cuadrado*******************************************

function perimetroCuadrado (lado){
    return lado*4
};
function areaCuadrado (lado){
    return lado*lado
};

function calcPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value)
    alert(area)
}
/* console.group("Cuadrados");
console.log("El perimetro de " + perimetroCuadrado + "cm");
console.log("El area del cuadrado es: " + areaCuadrado +"cm^2");
console.groupEnd(); */


//Triangulo*******************************************
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};
function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo*alturaTriangulo)/2;
}
function alturaTrianguloIsoceles(lado1,lado2,base){
    if (lado1 != lado2){
        alert("No es un triangulo isoceles")
    }else{       
        const altura = Math.sqrt(lado1**2 - (lado2**2/4))
        return alert(altura);
    } 
}

function calcAlturaTrianguloIsoceles(){
    const inputA = document.getElementById("InputTrianguloA");
    const lado1 = Number(inputA.value);

    const inputB = document.getElementById("InputTrianguloB");
    const lado2 = Number(inputB.value);

    const inputC = document.getElementById("InputTrianguloC");
    const base = Number(inputC.value);
    
    const altura = alturaTrianguloIsoceles(lado1,lado2,base); 
}




/* console.group("Triangulos")
console.log("El perimetro es de " + perimetroTriangulo)
console.log("El area del triangulo es de "+ areaTriangulo)
console.groupEnd(); */


//Circulos*******************************************
const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2
};
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};
function areaCirculo(radio){
    return (radio * radio)*2
}

function calcDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diam = diametroCirculo(value);
    alert(diam);

}
function calcPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perim = perimetroCirculo(value);
    alert(perim)
}
function calcAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area)
}

/* console.group("Circulos");
console.log("Diametro del circulo: "+ diametroCirculo);
console.log("Perimetro del circulo: "+ perimetroCirculo);
console.log("Area del circulo: "+ areaCirculo);
console.groupEnd(); */