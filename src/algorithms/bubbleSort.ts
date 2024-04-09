import {waitASecond} from '../services/utils';

export default async function bblSort(numbers: Array<number>): Promise<Array<number>> {
    for (let i=0; i<numbers.length-1; i++) {
        let isSorted = true; 
        for (let j=0; j<(numbers.length-1-i); j++) {
            if (numbers[j] > numbers[j+1]) {
                [numbers[j], numbers[j+1]] = [numbers[j+1], numbers[j]];
                isSorted = false;
                // This is just to see the changes happening with each step in the chart.
                await waitASecond(numbers);
            }
        }
        if (isSorted) {
            break;
        }
    }
    return numbers;
}