// Write a function `endsWithT` that accepts a string as an argument. The function should return a
// boolean indicating whether or not the string ends with the character 't'.

const endsWithT = function(string){
    last_character = string[string.length -1]
    return last_character === "t"
}

console.log(endsWithT("smart")); // true
console.log(endsWithT("racket")); // true
console.log(endsWithT("taco")); // false
console.log(endsWithT("boomerang")); // false
