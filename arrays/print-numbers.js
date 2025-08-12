export function printNumbers(arr) {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i - 2] + 1 === arr[i - 1] && arr[i] === arr[i - 1] + 1) {
            console.log(arr[i - 2] + " " + arr[i - 1] + " " + arr[i]);
        }
    }
}