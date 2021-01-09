import {generateDataset} from "./dataset_generation.ts";
import {testSortingFunctionPerformance} from "./test_performance.ts";
import {bubbleSort} from "./sorting_algorithms.ts";

// const dataset = generateDataset();
// console.log(dataset);
testSortingFunctionPerformance(bubbleSort);