

function rotationArray(array, k){
    let result = [];
    for(let i=0; i< array.length;i++){
        result[i]= array[(i+k)%array.length];
    }
    return result;
}

let arreglo =  [1, 2, 3, 4, 5]
let k = 2

console.log(rotationArray(arreglo, k));

//***
// Usamos esta opción <posicion_for> + <valor_incremento> %ARREGLO.LONGITUD
// Primero con el form tomamos la primera posición i
// a este valor, le sumamos el valor de k <deplazamiento>
// luego a esa suma, la dividimos por el total de largo del array
// el resultado de esta operación nos dara la nueva posición dentro del arreglo. 
//  */