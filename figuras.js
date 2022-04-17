//Cuadrado

function perimetroCuadrado (lado){
    return lado*4
};
function areaCuadrado (lado){
    return lado*lado
};

/* console.group("Cuadrados");
console.log("El perimetro de " + perimetroCuadrado + "cm");
console.log("El area del cuadrado es: " + areaCuadrado +"cm^2");
console.groupEnd(); */


//Triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};
function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo*alturaTriangulo)/2;
}

/* console.group("Triangulos")
console.log("El perimetro es de " + perimetroTriangulo)
console.log("El area del triangulo es de "+ areaTriangulo)
console.groupEnd(); */

//Circulos
function diametroCirculo(radio){
    return radio*2
};

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

function areaCirculo(radio){
    return (radio * radio)*2
}


/* console.group("Circulos");
console.log("Diametro del circulo: "+ diametroCirculo);
console.log("Perimetro del circulo: "+ perimetroCirculo);
console.log("Area del circulo: "+ areaCirculo);
console.groupEnd(); */


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

function alturaTrianguloIsoceles (lado1, lado2, base){
    if (lado1 != lado2){
        alert("No es un triangulo isoceles")
    }else{
        const altura = Math.sqrt(lado1**2 - (lado2**2/4))
    }
}