// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

function removeFirstVowel(string) {
    let vowels = "aeiou"
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if(vowels.includes(element)){
            let first = string.slice(0,i)
            let second = string.slice(i+1)
            return first + second
        }
    }
}

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'