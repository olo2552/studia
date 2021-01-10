const randomNumberFromRange = (min: number, max:number): number => {
    return Math.random() * (max - min) + min;
}

export const generateSingleSet = (size: number): number[] => {
    const setToGenerate = [];
    for (let i = 0; i < size; i++) {
        setToGenerate.push(randomNumberFromRange(0, 10000))
    }

    return setToGenerate;
}
