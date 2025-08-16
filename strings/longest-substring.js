function longestSubString(str){
    let start=0;
    // let max=0;
    let s="";
    const set = new Set();
    for(let end=0;end<str.length;end++){
        while(set.has(str.charAt(end))){
            set.delete(str.charAt(start));
            start++;
        }
        set.add(str.charAt(end));
        s = str.substring(start,end+1);
        // max = Math.max(max,s.length);
    }
    return s;
}
const str = longestSubString("abcabcdefs")
console.log("longest substring is : "+str);
console.log("length of longest substring is : "+str.length);
