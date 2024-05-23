/*
  Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

  Example 1:

  Input: nums = [3,0,1]
  Output: 2
  Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
 */

var missingNumber = function(nums: number[]): number  {
  let i = 0;
  while(i < nums.length){
      if(nums[i] !== i && nums[i] != nums.length){
          swap(nums, i, nums[i]);
      }else{
          ++i;
      }
  }
  console.log(nums, "test")
  let ans = nums.length;
  for(let i=0; i<nums.length; i++){
      if(i !== nums[i]){
          return i;
      }
  }
  return ans;
};

function swap(arr: number[], firstIndex: number, secondIndex : number){
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}