import {bubbleSort, insertSort} from "./sorting_algorithms.ts";
import {generateSingleSet} from "./dataset_generation.ts";
import {measureTimeExecution} from "./time_measuring.ts";

export const testSortingFunctionPerformance = (sortingFunction: typeof bubbleSort | typeof insertSort, testCaseSize: number): number => {
    const executionTimes = [];
    for (let i=0; i < 100; i++) {
        const testValues = generateSingleSet(testCaseSize);
        const timeExecution = measureTimeExecution(sortingFunction, testValues);
        console.log({
            sortingFunction,
            testCaseSize,
            timeExecution
        })
        executionTimes.push(timeExecution);
    }

    const executionTimeOverall = executionTimes.reduce((summedTimeExecution, currentTimeExecution) => {
        return summedTimeExecution + currentTimeExecution;
    }, 0);

    return executionTimeOverall / testCaseSize;
}