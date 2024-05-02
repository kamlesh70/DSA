// const prompt = require('prompt-sync')();
import promptSync from 'prompt-sync';
const prompt = promptSync();


function createArray() : number[]{
    const arrayLength: number = parseInt(prompt("Enter length of array :- "));
    const arr = [];
    for(let i=0;i<arrayLength;i++){
        arr.push(parseInt(prompt(`Enter ${i}'th element of array :- `)));
    }
    return arr;
}

async function changeArray(arr: number[]){
    arr = arr.map(item => {
        return 2*item;
    })
}

function printArray(arr: number[]){
    console.log("this is array",arr);
}

// [1,2,3,4,5,6]
// [2,1,4,3,6,5]

function swapAlternate(arr: number[]){
    const n = arr.length;
    for(let i=1; i<n; i += 2){
        const temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
}

// 2 3 1 6 3 6 2
function findUnique(arr: number[]): number{
    if(arr.length == 0){
        return -1;
    }
    const map = new Map();
    arr.forEach(element => {
        if(map.has(element)){
            map.set(element, map.get(element) + 1);
        }else{
            map.set(element, 1);
        }
    })
    let uniqueNumber = arr[0];
    for(let i=1; i<arr.length; i++){
        const element = arr[i];
        if(map.has(element) && map.get(element) === 1){
            uniqueNumber = element;
            break;
        }
    }
    return uniqueNumber;
}

// 0 2 1 3 1
// 0 -> n-2

function findDuplicate(arr: number[]): number{
    if(arr.length == 0) return -1;
    let currentIndex = 0;
    let n = arr.length;
    let duplicateNumber = arr[0];
    while(currentIndex < n){
        if(arr[currentIndex] !== currentIndex){
            if(arr[currentIndex] === arr[arr[currentIndex]]){
                duplicateNumber = arr[currentIndex];
                return duplicateNumber;
            }else{
                const temp = arr[currentIndex];
                arr[currentIndex] = arr[temp];
                arr[temp] = temp;
            }
        }else{
            ++currentIndex;
        }
    }
    return duplicateNumber;
}

function pairSum(arr: number[], sum: number) : number{
    let totalPair = 0;
    const arrMap = new Map();
    arr.forEach(element => {
        if(arrMap.has(element)){
            arrMap.set(element, arrMap.get(element)+1);
        }else{
            arrMap.set(element, 1);
        }
    })
    arr.forEach(element => {
        const findNumber = sum - element;
        if(arrMap.has(findNumber)){
            arrMap.set(element, arrMap.get(element)-1);
            if(arrMap.get(element) === 0){
                arrMap.delete(element);
            }
            if(arrMap.has(findNumber))
            totalPair += arrMap.get(findNumber);
        }
    })
    return totalPair;
}

function twoSum(arr: number[], sum: number){
    // array should be sorted
    // const arr: number[] = [1,2,2,4,4,5,5,5,5,7,7,11];
    // twoSum(arr, 10)
    let left = 0;
    let right = arr.length - 1;
    let totalPair = 0;
    while(left < right){
        const leftElement = arr[left];
        const rightElement = arr[right];
        if(leftElement + rightElement > sum){
            --right;
        }else if(leftElement + rightElement < sum){
            ++left;
        }else{
            if(leftElement !== rightElement){
                let leftCount = 1;
                let rightCount = 1;
                ++left;
                --right;
                while(leftElement === arr[left]){
                    ++left;
                    ++leftCount;

                }
                while(rightElement === arr[right]){
                    --right;
                    ++rightCount;

                }
                totalPair += leftCount * rightCount;
            }else{
                let count = 1;
                ++left;
                while(left <= right && arr[left] === arr[left-1]){
                    ++count;
                    ++left;
                }
                totalPair += (count*(count-1))/2;
            }
        }
    }
    console.log("Total Pair",totalPair);
}


// [1,2,2,4,4,5,5,7,7,11]
// diff ==>> 5
// start = , end = 

export default async function Array(){
    // const arr: number[] = createArray();
    const arr: number[] = [1,2,2,4,4,5,5,7,7,11];
    twoSum(arr, 11)
    // printArray(arr);
}
