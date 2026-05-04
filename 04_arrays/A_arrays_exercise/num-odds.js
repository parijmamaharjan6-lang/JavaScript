// Write a function `numOdds` that accepts an array of numbers as an argument. The function should
// return a number representing the count of odd elements in the array.

let numOdds = function (array) {
    let odd = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 !== 0) {
            odd += 1
        }
    }
    return odd
}

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0
