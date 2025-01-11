//**
// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'tronesa'

// manufacture(gifts, materials) // ["tren", "oso"]
// // 'tren' SÍ porque sus letras están en 'tronesa'
// // 'oso' SÍ porque sus letras están en 'tronesa'
// // 'pelota' NO porque sus letras NO están en 'tronesa'

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// manufacture(gifts, materials) // ["puzzle"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'

// manufacture(gifts, materials) // []
//  */

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

function manufacture(gifts, materials) {
  let regalosPosibles = [];
  for (elementos of gifts) {
    
    let apto = true;

    for (letras of elementos) {
      !materials.includes(letras) ? (apto = false) : null;
    }
    if(apto) {
      regalosPosibles.push(elementos);
    }
  }
  return regalosPosibles;
}

console.log(manufacture(gifts, materials));
