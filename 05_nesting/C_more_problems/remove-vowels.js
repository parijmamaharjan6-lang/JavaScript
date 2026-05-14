// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

function removeVowels(string) {
    let answer = ""
    let vowels = "aeiou"
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (!vowels.includes(element)) {
            answer += element;
        }
    }
    return answer;
}

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr