let list = [123,3,78,24,21,28,85,61]

function promedio (list){
    let sumaList = list.reduce((acum,pos)=> acum+pos)
    let promedio = sumaList/list.length
    return promedio
}


asd = 123;
console.log('la variable es ${asd}');