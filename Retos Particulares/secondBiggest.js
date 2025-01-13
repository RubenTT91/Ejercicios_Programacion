function secondBiggest(array){
    let secondBiggest = array.sort((a,b)=> b-a)[1];
 return secondBiggest;
}
array=[20,30,5,0,1,2,3,4,8]
console.log(secondBiggest(array));