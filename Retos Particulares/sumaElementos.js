function sumaElementos(arreglo){
    for(elemento of arreglo){
        // SE agrega un if para verificar que los elementos del arreglo sean números
        if(typeof elemento !== "number"){
            return "El arreglo debe contener solo números"
    }
}
    return arreglo.reduce((a,b) => a+b);
}
arreglo = [1,2,4,3,"hola",8,6,1,10]
console.log(sumaElementos(arreglo))
