// pattern

// 1
// 1 2
// 1 2 3
// 1 2 3 4

// sol :-

// row = 4
// col = i'th row
// print = i'th col

function printPattern_1(n) {
  for (let i = 1; i <= n; i++) {
    let patternString = "";
    for (let j = 1; j <= i; j++) {
      patternString += j + " ";
    }
    console.log(patternString);
  }
}
// printPattern_1(4);

// Pattern
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// Sol :-
// row = 4
// col = i'th row
// print = i'th row + i'th col - 1

function printPattern_2(n) {
  let count = 1;
  for (let row = 1; row <= n; row++) {
    let patternString = "";
    for (let col = 1; col <= row; col++) {
      patternString += count++ + " ";
    }
    console.log(patternString);
  }
}

// printPattern_2(4);

// Pattern
// 1
// 2 3
// 3 4 5
// 4 5 6 7

// Sol =>
// row = 4
// col = i'th row
// print = i'th row++

function printPattern_3(n) {
  for (let row = 1; row <= n; row++) {
    let patternString = "";
    let currentRow = row;
    for (let col = 1; col <= row; col++) {
      patternString += currentRow++ + " ";
    }
    console.log(patternString);
  }
}
// printPattern_3(4);

// Pattern
// A
// B B
// C C C
// D D D D

// Sol =>
// row = n
// col = ith row
// print = A + row

function printPattern_4(n) {
  for (let row = 1; row <= n; row++) {
    let patternString = "";
    let currentRow = n - row;
    for (let col = 1; col <= row; col++) {
      patternString += String.fromCharCode(65 + currentRow++) + " ";
    }
    console.log(patternString);
  }
}
printPattern_4(5);
