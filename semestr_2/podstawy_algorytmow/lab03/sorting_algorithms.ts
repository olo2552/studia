// Wariant = 51266 % 10 % 3 = 0
// 0 - Wariant A – sortowanie bąbelkowe, sortowanie przez scalanie.

const chooseHigherComparator = <ElementType>(x: ElementType, y: ElementType): boolean => x > y;
const chooseLowerComparator = <ElementType>(x: ElementType, y: ElementType): boolean => x < y;

type SortingFunction = <ElementsType>(array: ElementsType[], comparator?: typeof chooseHigherComparator) => ElementsType[]

export const bubbleSort: SortingFunction = (array, comparator = chooseHigherComparator) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (comparator(array[j], array[j + 1])) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// XD Co mogę powiedzieć, nie ten algortym dałem
export const insertSort: SortingFunction = (array, comparator = chooseLowerComparator) => {
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        // The last element of our sorted subarray
        let j = i-1;
        while ((j > -1) && comparator(current, array[j])) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
    return array;
}

function merge<T = number>(left: T[], right: T[], comparator = chooseHigherComparator): T[] {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays
        if (comparator(left[0], right[0])) {
            const leftElem = left.shift()
            if (!!leftElem) {
                arr.push(leftElem)
            }
        } else {
            const rightElem = right.shift()
            if (!!rightElem) {
                arr.push(rightElem)
            }
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

export function mergeSort<T=number>(array: T[]): T[] {
    const half = array.length / 2

    // Base case or terminating case
    if(array.length < 2){
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}