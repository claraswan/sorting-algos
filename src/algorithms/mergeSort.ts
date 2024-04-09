import { waitASecond } from "@/services/utils";

export default async function mergeSort(numbers: Array<number>): Promise<Array<number>> {
    if (numbers.length <= 1) {
        return numbers;
    }

    const halfwayIndex = Math.floor(numbers.length / 2);

    const left = await mergeSort(numbers.slice(0, halfwayIndex));
    const right = await mergeSort(numbers.slice(halfwayIndex));

    return await mergeTwoSortedArrays(left, right);
}

async function mergeTwoSortedArrays(left: Array<number>, right: Array<number>): Promise<Array<number>> {
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

    return [...mergedArray, ...left, ...right];
}