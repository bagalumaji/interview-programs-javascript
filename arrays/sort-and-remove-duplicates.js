import {sortNumbers} from './sort-numbers.js';
import {removeDuplicates} from "./remove-duplicates.js";

let arr=[2,1,3,2,3,1,5,4,6,3]
arr = sortNumbers(arr);
console.log(arr);
let newLength = removeDuplicates(arr);
for(let i=0;i<newLength;i++){
    console.log(arr[i]);
}