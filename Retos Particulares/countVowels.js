function countVowels(phrase){
    let vowels = ['a','e','i','o','u'];
    let count = 0;

    for (let i=0; i<phrase.length; i++){
        if(vowels.includes(phrase[i])) count++;
    }
    return count;

}

phrase = "Hasdfasdpapdsaposdpoqpoqweporqweprouwqer";
console.log(countVowels(phrase));