// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.

function alternatingCaps(str) {
    let array = str.split(" ")
    let ans = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i % 2 === 0) {
            ans.push(element.toLowerCase())
        }else{
            ans.push(element.toUpperCase())
        }   
    }
    return ans.join(" ")
}

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'
