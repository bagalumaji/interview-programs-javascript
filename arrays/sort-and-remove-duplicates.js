import {sortNumbers, sortNumbers2} from './sort-numbers.js';
import {removeDuplicates, removeDuplicates2} from "./remove-duplicates.js";

let arr=[2,1,3,2,3,1,5,4,6,3]
arr = sortNumbers(arr);
console.log( "after sorting")
console.log(arr);

console.log("after removing duplicates")
let newLength = removeDuplicates(arr);
for(let i=0;i<newLength;i++){
    console.log(arr[i]);
}



//second approach
let arr2=[2,1,3,2,3,1,5,4,6,3]

let a = removeDuplicates2(arr2)
console.log("after removing duplicates")
console.log(a);

console.log( "after sorting")
sortNumbers2(a)
console.log(a)
