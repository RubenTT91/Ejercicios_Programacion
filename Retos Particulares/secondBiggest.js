function secondBiggest(array){
    let biggest = array.reduce((a,b)=>{
        return Math.max(a,b);
    });

    console.log(biggest);
    let secondBiggest=0;

}
array=[20,30,5,1,2,3,4,8]
secondBiggest(array);