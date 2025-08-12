import {reverseStringWithoutInbuildFunction} from "./reverse-string-1.js";

const str="sayaji bagal pandharpur";

export function reverseStringWithCondition(str){
    const words = str.split(" ");
    let s1 = '';
    for(let i=0;i<words.length;i++) {
        if (i % 2 === 0) {
            s1 += reverseStringWithoutInbuildFunction(words[i]) + " ";
        } else {
            s1 += words[i].substring(1, words[i].length - 1)+" ";
        }
    }
    return s1;
}

console.log(reverseStringWithCondition(str));