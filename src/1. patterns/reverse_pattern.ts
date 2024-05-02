// Pattern
//     *
//    **
//   ***
//  ****
// *****

// Sol =>
// row = n
// col = n
// print = (n - row)(space) + row(*)

function pattern_1(n: number) {
  for (let row = 1; row <= n; row++) {
    let patternString = "";
    let space = n - row;
    for (let col = 1; col <= n; col++) {
      if (space-- > 0) {
        patternString += " ";
      } else {
        patternString += "*";
      }
    }
    console.log(patternString);
  }
}
// printPattern_1(4);

// Pattern
//      1
//    1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1

// Sol :-
// row = n
// col = n*2 -1
// print :- 1. spaces = (col < n-row) 2. number = (count <= row) count ++ and then (count > 1) --count

function pattern_2(n: number) {
  for (let row = 1; row <= n; row++) {
    let printString = "";
    let count = row;
    let col = 1;
    while (col <= n - row) {
      printString += " ";
      ++col;
    }
    while (count <= (2*row-1)) {
      printString += count;
      ++count;
    }
    --count;
    while (count > row) {
      --count;
      printString += count;
    }
    console.log(printString);
  }
}
// printPattern_2(4);

// Pattern
//   *
//  ***
// *****
//  ***
//   *

// Sol => n = 5
// rows = n
// firstHalf => numberOfRows = n/2 + 1 // 3
//           1. spaces => 2,1,0 ( firstHalf - row )
//           2. printStart => 1,3,5 ( 2*row-1 )
// secondHalf => numberOfRows = n - firstHalf  // 2
//           1. spaces => 1,2 => row+1 - (2*secondHalf)
//           2. printStart => 3, 1 => ( 2-1  )

function diamondPattern(n: number){

    const firstHalf = Math.floor(n/2) + 1; // 3
    let secondHalf = n - firstHalf; // 2
    let temp = secondHalf;
    let row = 1;
    while(row <= n){
      let printPattern = '';
      if(row <= firstHalf){
        let spaces = firstHalf - row;
        while(spaces-- > 0){
          printPattern += '_';
        }
        let start = 2*row-1;
        while(start-- > 0){
          printPattern += '*';
        }
      }else{
        while(row+1 - (2*temp) ){
          printPattern += '_'
        }
        let t = secondHalf;
        while((2*t - 1) > 0){
          printPattern += '*'
        }
        secondHalf--;
      }


      console.log(printPattern);
      row++;
    }
}

// pattern ==> 5
//     *
//     **
//     ***
//     ****
//     *****
//     ****
//     ***
//     **
//     *

// sol =>
// rows => n
// cols => 1. increasing phase => till iPhase = (n/2 + 1), count = row
//         2. decreasing phase => dPhase = n - iPhase, --count;
// print => print * according to the count;

// function pattern5(n: number){
//   let count = 0;
//   const increasingPhase = Math.ceil(n/2);
//   for(let row=1; row <= n; row++){
//     if(row <= increasingPhase){
//       ++count;
//     }else{
//       count = (row === increasingPhase+1 && n%2 === 0) ? count : count-1;
//     }
//     let printCount = count;
//     let pattern = "";
//     while(printCount >= 1){
//       pattern += "* ";
//       --printCount;
//     }
//     console.log(pattern);
//   }
// }

// pattern ==> 5
//     *
//     **
//     ***
//     ****
//     *****
//     ****
//     ***
//     **
//     *

function pattern5(n: number){
  const increasingPhase = Math.ceil(n/2);
  for(let row=1; row<=n; row++){
    let totalColInRow = 0;
    if(row <= increasingPhase){
      totalColInRow = row;
    }else{
      totalColInRow = n - row + 1;
    }
    let pattern = "";
    for(let col=1; col<=totalColInRow; col++){
      pattern += "* ";
    }
    console.log(pattern);
  }
}


// 8.      *
//        ***
//       *****
//      *******
//     *********

function pattern8(n: number){
  for(let row=1; row<=n; row++){
    const spacesCount: number = row;
    let printString: string = "";
    let alternateFlag = true;
    for(let col=1; col<=(2*n-row); col++){
      if(col < spacesCount){
        printString += ' ';
      }else{
        if(alternateFlag){
          printString += '*';
          alternateFlag = !alternateFlag;
        }else{
          printString += ' ';
          alternateFlag = !alternateFlag;
        }
      }
    }
    console.log(printString);
  }
}


export default function Pattern(){
  console.log("printing patterns")
  pattern8(5);
  
}

