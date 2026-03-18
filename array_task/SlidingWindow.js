function highestSumOfThreeNumbers(array) {
    if (array.length < 3) return [];

    let maximumSum = 0;
    let windowSum = 0;
    let startIndex = 0;

    for (let index = 0; index < 3; index++) {
        windowSum += array[index];
    }

    maximumSum = windowSum;

    for (let index = 3; index < array.length; index++) {
        windowSum += array[index];
        windowSum -= array[index - 3];

        if (windowSum > maximumSum) {
            maximumSum = windowSum;
            startIndex = index - 2;
        }
    }

    return array.slice(startIndex, startIndex + 3);
}

module.exports = { highestSumOfThreeNumbers };