// Write a function `removeDupes` that accepts an array as an argument. The function should return a
// new array where each element only appears once.

function removeDupes(array) {
    let answer = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!answer.includes(element)) {
            answer.push(element)
        }
    }
    return answer;
}

console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
console.log(removeDupes([false, false, true, false])); // [false, true]
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]
