const set = new Set();
arreglo = [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,2,2,2,3];

arreglo.forEach(element => {
   set.add(element) ;
});
    

console.log(...set)