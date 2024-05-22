/*
  Bubble sort
  INTUITION :-
  - compare each element with the next element and swap them to the next index
  - after completing one cycle or one inner loop will get last element sorted.

  Complexity:

  Worst case :
  - Time Complexity :- O(n^2)
  - Space Complexity :- O(1)

  Best case :
  - Time Complexity :- O(n)
  - Space Complexity :- O(1)
*/

import { Order, swap } from "./util";

function bubbleSort(arr: number[], order: Order) {
  let alreadySorted = true;
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length - i; j++) {
      if(order === 'ASC'){
        if(arr[j] > arr[j+1]){
          swap(arr, j, j+1);
          alreadySorted = false
        }
      }else {
        if(arr[j] < arr[j+1]){
          swap(arr, j, j+1);
          alreadySorted = false;
        }
      }
    }
    if(alreadySorted){
      break;
    }
  }
}

export default async function BubbleSort(){
  const arr: number[] = [1,2,3,4,5];
  bubbleSort(arr, Order.ASC);
  console.log(arr);
}