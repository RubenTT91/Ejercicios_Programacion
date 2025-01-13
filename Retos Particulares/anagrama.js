function isAnabrama(word1, word2) {
  let isAnagrama = true;

  if (word1.length != word2.length) return (isAnagrama = false);

  let letter = word1.split("");
  
  for (let i = 0; i < word1.length; i++) {
    if (!letter.includes(word1[i]) || !letter.includes(word2[i])) {
      return (isAnagrama = false);
    }
  }
  return isAnagrama;
}s

let result = isAnabrama("amor", "roma");
console.log(result);