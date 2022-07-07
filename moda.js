const list = [9,8,9,13,3,1,6,3,3,6,9,3,3,3,3435,555,67,98,21,4];
const contador = {}

list.map(function(e){
    if (contador[e]){
        contador[e] += 1;
    }else{
        contador[e] = 1;
    }
})

//obj.entries, covierte obj en array
const contadorToArray = Object.entries(contador).sort(
    function(a,b){
        return a[1]-b[1]
    }
)

const moda = contadorToArray[contadorToArray.length -1]