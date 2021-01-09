import set = Reflect.set;

const randomNumberFromRange = (min: number, max:number): number => {
    return Math.random() * (max - min) + min;
}

const generateSingleSet = (size: number): number[] => {
    const setToGenerate = [];
    for (let i = 0; i < size; i++) {
        setToGenerate.push(randomNumberFromRange(0, 10000))
    }

    return setToGenerate;
}

export const generateDataset = (): number[][] => {
    return [
        generateSingleSet(10),
        generateSingleSet(100),
        generateSingleSet(1000),
        generateSingleSet(10000),
        generateSingleSet(100000),
        generateSingleSet(1000000),
    ];
}