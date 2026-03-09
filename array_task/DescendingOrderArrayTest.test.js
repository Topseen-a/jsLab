const { getEvenNumbers,  sortInDescendingOrder, sortDescendingOrder, getEvenNumbersFromArray } = require("./DescendingOrderArray");

test("for multi-array sorting even numbers in descending order", () => {
    let input = [
        [2, 1, 6, 7, 10],
        [11, 4, 12, 5, 8]
    ];

    let evenNumbers = getEvenNumbers(input);
    let result = sortInDescendingOrder(evenNumbers);

    const answer = [12, 10, 8, 6, 4, 2];
    
    expect(result).toEqual(answer);
});

test("for sorting even numbers in descending order", () => {
    let firstInput = [2, 1, 6, 7, 10];
    let secondInput = [11, 4, 12, 5, 8];

    let result = sortDescendingOrder(getEvenNumbersFromArray(firstInput, secondInput));

    const answer = [12, 10, 8, 6, 4, 2];
    
    expect(result).toEqual(answer);
});
