import { analyzeArray } from "./analyze";

test('Analyze array function where the array is [1,8,3,4,2,6], should return an object with these parameters: average: 4, min: 1, max: 8, length: 6', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({"average": 4, "length": 6, "max": 8, "min": 1})
})