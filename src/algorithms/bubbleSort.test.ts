import { expect, test} from 'vitest'
import bblSort from './bubbleSort';

const testData = [
    {
        input: [4, 3, 2, 1],
        expectedOutput: [1, 2, 3, 4]
    },
    {
        input: [6, 1, 19, 23, 21, 12, 5, 9, 10, 14, 3, 2, 5, 5, 18, 13, 15],
        expectedOutput: [1, 2, 3, 5, 5, 5, 6, 9, 10, 12, 13, 14, 15, 18, 19, 21, 23]
    },
    {
        input: [5, 0, 3, 2, 1],
        expectedOutput: [0, 1, 2, 3, 5]
    }
]

test('it sorts numbers correctly', () => {
    for (const data of testData) {
        expect(bblSort(data.input)).toStrictEqual(data.expectedOutput)
    }
})