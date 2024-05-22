/*
  Selection sort
  INTUITION :-
  - select maximum or minimum or array and put it at the end 
  - after one cycle last element of array is sorted or in its right place

  Complexity:

  Worst case :
  - Time Complexity :- O(n^2)
  - Space Complexity :- O(1)

  Best case :
  - Time Complexity :- O(n^2)
  - Space Complexity :- O(1)
*/

import { swap, Order } from "./util";

function selectionSort(arr: number[], order: Order){
  for(let i = 0; i < arr.length; i++){
    if(order === Order.ASC){
      const maxIndex = findMaxElementIndex(arr, 0, arr.length - i);
      swap(arr, maxIndex, arr.length - i - 1);
    }else {
      const minIndex = findMinElementIndex(arr, 0, arr.length - i);
      swap(arr, minIndex, arr.length - i - 1);
    }
  }
}

function findMinElementIndex(arr: number[], startIndex: number, endIndex: number): number{
  let minIndex = startIndex;
  let minElement = arr[startIndex];
  for(let i = startIndex + 1; i < endIndex; i++){
    if(minElement > arr[i]){
      minIndex = i;
      minElement = arr[i];
    }
  }
  return minIndex;
}

function findMaxElementIndex(arr: number[], startIndex: number, endIndex: number): number{
  let maxIndex = startIndex;
  let maxElement = arr[startIndex];
  for(let i = startIndex + 1; i < endIndex; i++){
    if(maxElement < arr[i]){
      maxIndex = i;
      maxElement = arr[i];
    }
  }
  return maxIndex;
}

export default async function SelectionSort(){
  const arr: number[] = [3,7,1,9,3,77,22,44,99];
  selectionSort(arr, Order.DESC);
  console.log(arr);
}