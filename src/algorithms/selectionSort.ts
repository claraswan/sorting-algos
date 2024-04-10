import { waitASecond } from '@/services/utils';

export default async function selectionSort(numbers: Array<number>): Promise<Array<number>> {
    for (let i = 0; i < numbers.length; i++) {
        // select minimum element in the array
        let position_smallest = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[position_smallest]) {
                position_smallest = j;
                await waitASecond(numbers);
            }
        }

        // swap the new smallest element into place if the array is longer than 1
        if (i !== position_smallest) {
            [numbers[i], numbers[position_smallest]] = [numbers[position_smallest], numbers[i]];
        }
    }

    return numbers;
}
