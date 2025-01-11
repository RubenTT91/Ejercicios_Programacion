function masGrande(arrayNumber) {
  if (arrayNumber.length === 0 || arrayNumber === undefined)
    return "";
  else {
    const biggest = arrayNumber.reduce((a, b) => Math.max(a, b));
    return biggest;
  }
}

arreglo = [1,2,3,4,5,6,7,8,9,10];
console.log(masGrande(arreglo));
