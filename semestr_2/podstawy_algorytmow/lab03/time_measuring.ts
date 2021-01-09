export const measureTimeExecution = (functionToMeasure: Function, ...funcArgs: any[]): number => {
    const startingTime = performance.now();
    functionToMeasure.call(null, ...funcArgs);
    const endingTime = performance.now();

    return startingTime - endingTime;
}

