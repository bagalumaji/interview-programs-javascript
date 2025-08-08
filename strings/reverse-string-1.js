
export function reverseStringWithoutInbuildFunction(arr){
    const s = arr.split("");
    let start=0;
    let end=s.length-1;
    while(start<end){
        let t = s[start];
        s[start] = s[end];
        s[end] = t;
        start++;
        end--;
    }
    return s.join("");
}