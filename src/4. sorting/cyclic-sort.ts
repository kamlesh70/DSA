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


/**
 * @param {number[]} nums
 * @return {number}
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n]    inclusive.
*/
var findDuplicate = function(nums: number[]) {
  let index = 0;
  while(index < nums.length){
      const correctIndex = index + 1;
      if(correctIndex !== nums[index] 
          && nums[index] !== nums[nums[index] -1]) {
              swap(nums, index, nums[index] - 1);
          }
      else{
          ++index;
      }
  }
  let ans = -1;
  for(let i=0;i<nums.length;i++){
      if(nums[i] !== i + 1){
          return nums[i];
      }
  }
  return ans;
};
