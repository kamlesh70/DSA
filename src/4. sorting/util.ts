export function swap(arr: number[], firstIndex: number, secondIndex: number){
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

export enum Order {
  ASC = "ASC",
  DESC = "DESC",
}