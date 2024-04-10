import { waitASecond } from '@/services/utils';

export default async function insertionSort(numbers: Array<number>): Promise<Array<number>> {
    for (let i = 1; i < numbers.length; i++) {
        const selectedItem = numbers[i];
        let j = i - 1;

        while (j >= 0 && selectedItem < numbers[j]) {
            // compare selected item to each value in the already-sorted array
            numbers[j + 1] = numbers[j];
            j--;
        }

        numbers[j + 1] = selectedItem;
        await waitASecond(numbers);
    }

    return numbers;
}
