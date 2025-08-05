const arr = [2, 1, 4, 5, 7, 6, 3, 7]
let max1 = arr[0];
let max2 = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (max1 < arr[i]) {
        max2 = max1;
        max1 = arr[i];
    } else if (max2 < arr[i] && max1 !== arr[i]) {
        max2 = arr[i];
    }
}
console.log("second largest : "+max2);
