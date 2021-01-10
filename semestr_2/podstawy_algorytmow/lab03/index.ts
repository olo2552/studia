
// SPRAWOZDANIE
// https://docs.google.com/document/d/1yiJkPIZkFwx11fR5aOyee5tyclvpeISaSrqiFJuKTrQ/edit?usp=sharing

import {testSortingFunctionPerformance} from "./test_performance.ts";
import {bubbleSort, mergeSort} from "./sorting_algorithms.ts";

const bubbleSortForTen = testSortingFunctionPerformance(bubbleSort, 10);
const bubbleSortForHundred = testSortingFunctionPerformance(bubbleSort, 100);
const bubbleSortForThousand = testSortingFunctionPerformance(bubbleSort, 1000);
const bubbleSortForTenThousand = testSortingFunctionPerformance(bubbleSort, 10000);
const bubbleSortForHundredThousand = testSortingFunctionPerformance(bubbleSort, 100000);

const mergeSortForTen = testSortingFunctionPerformance(mergeSort, 10);
const mergeSortForHundred = testSortingFunctionPerformance(mergeSort, 100);
const mergeSortForThousand = testSortingFunctionPerformance(mergeSort, 1000);
const mergeSortForTenThousand = testSortingFunctionPerformance(mergeSort, 10000);
const mergeSortForHundredThousand = testSortingFunctionPerformance(mergeSort, 100000);

console.log({
    mergeSortForTen,
    mergeSortForHundred,
    mergeSortForThousand,
    mergeSortForTenThousand,
    mergeSortForHundredThousand,
})


console.log({
    bubbleSortForTen,
    bubbleSortForHundred,
    bubbleSortForThousand,
    bubbleSortForTenThousand,
    bubbleSortForHundredThousand,
})


// bubble for 10 ~ 0
// bubble for 100 ~ 0-2
// bubble for 1000 ~5
// bubble for 10000 ~ 550
// bubble for 100000 ~ 60500