function longestSubString(str){
    const set = new Set();
    let start = 0;
    let s="";
    let end =0;
    let max=0;
    while(end<str.length){
            if(!set.has(str.charAt(end))){
                set.add(str.charAt(end));
                end++;
            }else{
                set.delete(str.charAt(start));
                start++;
            }
           if(max<(end-start)){
            max = end-start
            s = str.substring(start,end);
           }
           
    } 
    console.log(str)
    console.log(max);
    console.log(s);

}
longestSubString("abcabcdefs");