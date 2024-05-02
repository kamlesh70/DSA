// sliding window 
// 1. check input and output of the problem, if problem includes array/string, subarray and window size or condition.
// 2. identify sliding window
// 3. if all these are there try sliding window once but this is not necessary this alway work.

// Problem
// max sum of sub-array size of k
function maxSumSubArray(arr: number[], k: number){
    let startOfWindow = 0;
    let endOfWindow = 0;
    let maxSum = 0;
    let currentSum = 0;
    while(endOfWindow < arr.length){
        currentSum += arr[endOfWindow]; 
        if(endOfWindow - startOfWindow + 1 < k){
            endOfWindow++;
        }
        else if(endOfWindow - startOfWindow + 1 === k){
            maxSum = Math.max(maxSum, currentSum);
            currentSum = currentSum - arr[startOfWindow];
            ++startOfWindow;
            ++endOfWindow;
        }
    }
    console.log("Max sum of sub-array is : ", maxSum);
}

// problem
// find first -ive integer in a given window size sub array
function firstNegativeInteger(arr: number[], k: number){
    let startOfWindow = 0;
    let endOfWindow = 0;
    const allNegativeArr = [];
    let negativeCurrentIndex = 0;
    while(endOfWindow < arr.length){
        if(arr[endOfWindow] < 0){
            allNegativeArr.push(arr[endOfWindow]);
        }
        if(endOfWindow - startOfWindow + 1 < k){
            ++endOfWindow;
        } else if(endOfWindow - startOfWindow + 1 === k) {
            if(allNegativeArr.length > negativeCurrentIndex){
                console.log(`first negative is in range ${startOfWindow} - ${endOfWindow}`, allNegativeArr[negativeCurrentIndex])
            }else {
                console.log(`No first negative integer in range ${startOfWindow} - ${endOfWindow}`, 0)
            }
            if(allNegativeArr[negativeCurrentIndex] === arr[startOfWindow]){
                ++negativeCurrentIndex;
            }
            ++startOfWindow;
            ++endOfWindow;
        }
    }
}

export default async function SlidingWindow(){
    // const arr: number[] = createArray();
    const arr: number[] = [12 ,-1 ,-7, 8, -15, 30, 18, 28];
    firstNegativeInteger(arr, 3);
    // printArray(arr);
}