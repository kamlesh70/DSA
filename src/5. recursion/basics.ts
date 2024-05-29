function printNumber(n: number, currentNumber: number): void {
  if(n == currentNumber){
    console.log(n);
    return;
  }
  printNumber(n, currentNumber + 1);
  console.log(currentNumber);
}


/*
 binary search with recursion
*/ 
function binarySearch(arr: number[], target: number, start: number, end: number) : number {
  if(start > end){
    return -1;
  }
  const mid = Math.floor(start + ( end - start )/2);
  if(arr[mid] === target){
    return mid;
  }

  if(arr[mid] < target){
    return binarySearch(arr, target, mid+1, end);
  } else {
    return binarySearch(arr, target, start, mid-1);
  }
}

export function RecursionBasics(){
  const arr = [1,2,3,4,5,6,7,8];
  const start = 0;
  const end = arr.length - 1;
  const ans = binarySearch(arr, 17, start, end);
  console.log(ans);
}

