// Login: gdx142966
// Nr albumu: 51266

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
