let list = [123,4,554,67865,95]

function promedio (list){
    let sumaList = list.reduce((acum,pos)=> acum+pos)
    let promedio = sumaList/list.length
    return promedio
}

let mitadlista = parseInt(list.length / 2)

function esPar(number){
    if (list.length % 2 === 0){
        return true
    }else{
        return false
    }
 }

let mediana;

 if (esPar (list.length)){
    const elemento1 = list[mitadlista-1]
    const elemento2 = list[mitadlista]
    const promedio = promedio[elemento1,elemento2]
    mediana= promedio

 }else{
    mediana = list[mitadlista]
 }



 