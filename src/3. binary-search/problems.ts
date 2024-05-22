/* 
  Problem ; 1

  find Ceiling of an array ( where target number should be less than or equal to ans) and array is sorted
  arr = [2,3,5,9,14,16,18]
  target = 15
  ans = 16

  intuition : we can apply BS here bcz array is sorted and we have to find a number, the condition will be little different then the base BS condition.
*/

function findCeiling(arr: number[], target: number){
  let start = 0;
  let end = arr.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;
  if(target > arr[arr.length - 1]){
    return ans;
  }
  while( end >= start ){
    const mid = start + (end - start)/2;
    if(arr[mid] > target){
      ans = arr[mid]; // one candidate for the answer
      end = mid - 1;
    } else if(arr[mid] < target){
      start = mid + 1;
    } else {
      return arr[mid];
    }
  }
  return ans;
}


/* 
  Problem : 2

  find Floor of an array ( where target number should be greater than or equal to ans) and array is sorted
  arr = [2,3,5,9,14,16,18]
  target = 15
  ans = 16
*/

function findFloor(arr: number[], target: number){
  let start = 0;
  let end = arr.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;
  if(target < arr[arr.length - 1]){
    return ans;
  }
  while( end >= start ){
    const mid = start + (end - start)/2;
    if(arr[mid] > target){
      end = mid - 1;
    } else if(arr[mid] < target){
      ans = arr[mid]; // one candidate for the answer
      start = mid + 1;
    } else {
      return arr[mid];
    }
  }
  return ans;
}

// =====================================================================================================================

export default function BinarySearch(){
  const arr = [2,3,5,9,14,16,18];
  const target = 15;
  const ans = findFloor(arr, target);
  console.log(ans);
}

// =====================================================================================================================
