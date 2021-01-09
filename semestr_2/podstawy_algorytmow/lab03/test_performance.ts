import {bubbleSort, insertSort} from "./sorting_algorithms.ts";
import {generateDataset} from "./dataset_generation.ts";
import {measureTimeExecution} from "./time_measuring.ts";

export const testSortingFunctionPerformance = (sortingFunction: typeof bubbleSort | typeof insertSort): number[] => {
    const measurementsAcrossAllTests: number[][] = [];
    const NUMBER_OF_TEST_CASES = 100;
    for (let i = 0; i<NUMBER_OF_TEST_CASES; i++) {
        const dataset = generateDataset();

        const measurements = dataset.map((singleSet) => {
            return measureTimeExecution(sortingFunction, singleSet);
        });
        measurementsAcrossAllTests.push(measurements);
    }
    console.log(measurementsAcrossAllTests)
    const summedMeasurements = measurementsAcrossAllTests.reduce((summedMeasurements, currentMeasurements) => {
        return summedMeasurements.map((singleMeasurement, index) => {
            return singleMeasurement + currentMeasurements[index];
        })
    },[])
    console.log(summedMeasurements)
    return [1];
    // const avgMeasurements = summedMeasurements.map(summedMeasurements) / NUMBER_OF_TEST_CASES;
}