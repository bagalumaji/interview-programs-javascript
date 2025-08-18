export function allPairsOfSums(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let val = target - arr[i];
        if (!map.has(val)) {
            map.set(arr[i], val);
        }
    }
    return map;
}
