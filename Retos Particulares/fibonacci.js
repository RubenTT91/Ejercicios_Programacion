function fibonacci(element){
    let a =0;
    secuencia = [];

    for(let i=0; i<element;i++){
        if(i==0 || i==1 ){
            secuencia.push(i);
            continue;                    
        } else{
            secuencia.push(secuencia[i-2] + secuencia[i-1]);
        }
}
    return secuencia;
}

console.log(fibonacci(5));
