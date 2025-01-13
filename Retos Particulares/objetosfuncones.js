
function general(valor1,valor2){
    let vl1 = parseInt(valor1);
    let vl2 = parseInt(valor2);

    return {
        suma: ()=> vl1 + vl2,
        resta:()=> vl1 -vl2,
        division : ()=> vl1>0 ? vl1 / vl2 : "No se puede dividir por 0",
        multiplicacion :  ()=> vl1 * vl2,
              }
}

let result = general(0,20).division();
console.log(result);