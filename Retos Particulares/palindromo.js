function palindromo(palabra){
    let resultado = true;
 let longitud = palabra.length;        
    console.log('*'.repeat(11))
    for(letra of palabra){        
        console.log(`* ${letra} <=> ${palabra[longitud-1]} *`) // Comprobación de las letras en consola
        if (letra != palabra[longitud-1]) {
            resultado = false;                   
        }           
        longitud--;
    }
    console.log('*'.repeat(11), '\n')
    return resultado;
}

palabra =  "abcdefedcba";
console.log(palindromo(palabra))


// HECHO POR MI