// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

function shortenLongWords(sentence) {
  let result = []
  let array = sentence.split(" ")
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.length > 4) {
      let answer = removeVowels(element)      
      result.push(answer)
    }else{
      result.push(element)
    }
  }
  return result.join(" ")
}
function removeVowels(string) {
  let answer = "";
  let vowels = "aeiou";
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (!vowels.includes(element)) {
      answer += element;
    }
  }
  return answer;
}


console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'