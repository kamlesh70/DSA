function printNumber(n: number, currentNumber: number): void {
  if(n == currentNumber){
    console.log(n);
    return;
  }
  printNumber(n, currentNumber + 1);
  console.log(currentNumber);
}


export function RecursionBasics(){
  printNumber(5, 1);
}