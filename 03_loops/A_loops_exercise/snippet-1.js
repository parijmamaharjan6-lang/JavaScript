// snippet 1
console.log("hello");

for (let i = 0; i < 5; i++) {
  console.log("code");
}

console.log("goodbye");

// snippet 2
console.log("hi");

for (let i = 3; i <= 7; i++) {
  console.log("program");
  console.log(i);
}

console.log("bye");

// snippet 3
let foo = function () {
  for (let num = 10; num > 0; num -= 2) {
    console.log(num);
  }
};

console.log("begin");
foo();
console.log("end");
foo();

// snippet 4
let word = "street";
for (let i = 0; i < word.length; i++) {
  console.log(i);
  console.log(word[i]);
}

// snippet 5
let total = 0;
for (let i = 1; i < 5; i++) {
  total += i;
  console.log(total);
}

console.log("grand total: " + total);