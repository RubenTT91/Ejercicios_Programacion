function encontrarMasLargo(frase) {

  if (frase.trim() != "") return " "; // Si no hay palabras, arroja vacio
  

  const palabrasArreglo = frase.split(/\s+/);

  return palabrasArreglo.reduce((first, second) => {
    first.length > second.length ? first : second;
  });
}

// HECHO POR MI