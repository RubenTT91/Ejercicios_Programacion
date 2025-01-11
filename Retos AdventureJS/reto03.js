const original = "stepfor";
const modified = "stepor";

function findNaughtyStep(original, modified) {
  const max = Math.max(original.length, modified.length);
  
  for (let i = 0; i < max; i++) {
    // se asignan valores a variables individuales para comparar.
    const originalStep = original[i] || ""; // Si no hay más caracteres, usa ""
    const modifiedStep = modified[i] || ""; // Si no hay más caracteres, usa ""
    // Se comparan las variables si son diferentes
    if (originalStep !== modifiedStep) {      
       return  original.length == max ? originalStep : modifiedStep;      
    }
  }
  return ""; // Si no hay diferencias
}

console.log(findNaughtyStep(original, modified));


