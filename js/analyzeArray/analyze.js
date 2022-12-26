function getAverage(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    })
    return sum / numbers.length;
}

function analyzeArray(numbers) {
    return {
        average: getAverage(numbers),
        min: Math.min(...numbers),
        max: Math.max(...numbers),
        length: numbers.length
    }
}

export { analyzeArray };