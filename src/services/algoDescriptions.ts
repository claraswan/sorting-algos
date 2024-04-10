import { Algorithm } from './types';

export const algoDescriptions = [
    {
        name: Algorithm.bubble,
        description:
            'a simple and slower sorting algorithm, bubble sort iteratively compares adjacent elements, placing the smaller element in the correct spot. this allows larger elements to "bubble" to the top.',
    },
    {
        name: Algorithm.insertion,
        description: '',
    },
    {
        name: Algorithm.merge,
        description:
            'merge sort is an efficient sorting algorithm using a "divide and conquer" method. in this example, the "bottom-up" method, or the iterative method is used. the algorithm starts by sorting and merging together all sub-arrays of length 1, then 2, and so on until the array is sorted.',
    },
    {
        name: Algorithm.selection,
        description:
            'selection sort iteratively selects the smallest element in the unsorted part of the list, then moving that element to the sorted part of the list.',
    },
];
