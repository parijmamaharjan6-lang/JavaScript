// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.

let noOhs = function(str){
    let ans = "";
    for(let i = 0; i <= str.length; i++){
        if(str[i] !== "o"){
            ans += str[i];
            console.log(ans);
        }
    }
}

noOhs("code");
// prints
//  c
//  d
//  e

noOhs("school");
// prints
//  s
//  c
//  h
//  l
