export function sortNumbers(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if(numbers[i] > numbers[j]){
                let t = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = t;
            }
        }
    }
    return numbers;
}