// Write a function `evens(max)` that accepts a max number as an argument. The function should print
// all positive even numbers that are less than the max.

let evens = function(num){
    for(let i = 2; i < num; i+=2){
        console.log(i)
    }
}

evens(11);
// prints
//  2
//  4
//  6
//  8
//  10

evens(8);
// prints
//  2
//  4
//  6
