import { waitASecond } from '@/services/utils';

export default async function mergeSort(numbers: Array<number>) {
    const n = numbers.length;

    let len = 1;
    while (len < n) {
        let i = 0;

        // iterate over all parts of numbers of size len and save beginning and end index of each two adjacent parts
        while (i < n) {
            let startLeft = i;
            let startRight = i + len - 1;
            let endLeft = i + len;
            let endRight = i + 2 * len - 1;

            if (endLeft >= n) {
                break;
            }

            if (endRight >= n) {
                endRight = n - 1;
            }

            let temp = merge(numbers, startLeft, startRight, endLeft, endRight);
            // copy the elements from temp into their respective places in numbers
            for (let j = 0; j < endRight - startLeft + 1; j++) {
                numbers[i + j] = temp[j];
            }

            i = i + 2 * len;
            await waitASecond(numbers);
        }

        len = 2 * len;
    }

    return numbers;
}

function merge(
    numbers: Array<number>,
    startIndexLeft: number,
    startIndexRight: number,
    endIndexLeft: number,
    endIndexRight: number,
) {
    let temp = [];
    let index = 0; // the index that should hold the next value to be added to temp

    // iterate over the two parts together
    while (startIndexLeft <= startIndexRight && endIndexLeft <= endIndexRight) {
        // take the smaller value from both parts and store it inside temp
        if (numbers[startIndexLeft] <= numbers[endIndexLeft]) {
            temp[index] = numbers[startIndexLeft];
            index = index + 1; // move index one step forward
            startIndexLeft = startIndexLeft + 1;
        } else {
            temp[index] = numbers[endIndexLeft];
            index = index + 1; // move index one step forward
            endIndexLeft = endIndexLeft + 1;
        }
    }
    // now we might have remaining elements from the above loop, so:

    // iterate over the remaining elements from first loop
    while (startIndexLeft <= startIndexRight) {
        temp[index] = numbers[startIndexLeft];
        index = index + 1; // move index one step forward
        startIndexLeft = startIndexLeft + 1;
    }

    // iterate over the remaining elements from second loop
    while (endIndexLeft <= endIndexRight) {
        temp[index] = numbers[endIndexLeft];
        index = index + 1; // move index one step forward
        endIndexLeft = endIndexLeft + 1;
    }

    return temp;
}

async function recursiveMergeSort(numbers: Array<number>): Promise<Array<number>> {
    if (numbers.length <= 1) {
        return numbers;
    }

    const halfwayIndex = Math.floor(numbers.length / 2);

    const left = await recursiveMergeSort(numbers.slice(0, halfwayIndex));
    const right = await recursiveMergeSort(numbers.slice(halfwayIndex));

    return await mergeTwoSortedArrays(left, right);
}

async function mergeTwoSortedArrays(
    left: Array<number>,
    right: Array<number>,
): Promise<Array<number>> {
    let mergedArray: Array<number> = [];

    while (left.length && right.length) {
        // check which array's first item is smaller, then pushing that first item into the mergedArray
        if (left[0] < right[0]) {
            mergedArray.push(left.shift() ?? 0); // add item to mergedArray and delete it from its previous array
        } else {
            mergedArray.push(right.shift() ?? 0); // add item to mergedArray and delete it from its previous array
        }

        //await waitASecond([...mergedArray, ...left, ...right]);
    }

    while (left.length) {
        mergedArray.push(left.shift() ?? 0);
    }

    while (right.length) {
        mergedArray.push(right.shift() ?? 0);
    }

    return [...mergedArray, ...left, ...right];
}
