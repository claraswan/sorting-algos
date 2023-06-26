export default async function bblSort(numbers: Array<number>) {
    for (let i=0; i<numbers.length-1; i++) {
        let isSorted = true; 
        for (let j=0; j<(numbers.length-1-i); j++) {
            if (numbers[j] > numbers[j+1]) {
                [numbers[j], numbers[j+1]] = [numbers[j+1], numbers[j]];
                isSorted = false;   
            }
        }
        if (isSorted) {
            break;
        }
    }
    return numbers;
}