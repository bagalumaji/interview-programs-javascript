export function removeDuplicates(arr) {
    let a = 0;
    let b = 1;
    while(b<arr.length){
        if(arr[a]!==arr[b]){
            a++;
            arr[a] = arr[b];
        }
        b++;
    }
    return a+1;

}

//using set
export function removeDuplicates2(arr) {
    return [...new Set(arr)];
}