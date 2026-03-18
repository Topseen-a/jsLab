const {highestSumOfThreeNumbers} = require("./SlidingWindow")

test ("for highest sum of three numbers in array", ()=> {
    let input = [2,1,5,6,2,1];
    let answer = [5,6,2];
    let result = highestSumOfThreeNumbers(input);
    expect(result).toEqual(answer)
})