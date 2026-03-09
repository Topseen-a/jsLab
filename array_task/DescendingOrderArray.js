function getEvenNumbers(array) {

    let evenNumbers = [];

    for (let count = 0; count < array.length; count++) {
        for (let index = 0; index < array[count].length; index++) {
            if (array[count][index] % 2 === 0) {
                evenNumbers.push(array[count][index]);
            } 
        }
    }
    return evenNumbers;
}

function sortInDescendingOrder(array) {

    let swap;

    for (let count = 0; count < array.length; count++) {
        for(let index = 0; index < array.length; index++) {
            if (array[count] > array[index]) {
                swap = array[count];
                array[count] = array[index];
                array[index] = swap;
            }
        }
    }
    return array;
}

let input = [
        [2, 1, 6, 7, 10],
        [11, 4, 12, 5, 8]
    ];

let evenNumbers = getEvenNumbers(input);
console.log(sortInDescendingOrder(evenNumbers));

function getEvenNumbersFromArray(arrayOne, arrayTwo) {
    let evenNumbers = [];
    for (let count = 0; count < arrayOne.length; count++) {
        if (arrayOne[count] % 2 === 0) {
            evenNumbers.push(arrayOne[count]);
        }
    }
    for (let index = 0; index < arrayTwo.length; index++) {
        if (arrayTwo[index] % 2 === 0) {
            evenNumbers.push(arrayTwo[index]);
        }
    }
    return evenNumbers;
}


function sortDescendingOrder(array) {
    let swap;
    for (let count = 0; count < array.length; count++) {
        for(let index = 0; index < array.length; index++) {
            if (array[count] > array[index]) {
                swap = array[count];
                array[count] = array[index];
                array[index] = swap;
            }
        }
    }
    return array;
}

let firstInput = [2, 1, 6, 7, 10];
let secondInput = [11, 4, 12, 5, 8];

console.log(sortInDescendingOrder(getEvenNumbersFromArray(firstInput, secondInput)));

module.exports = { getEvenNumbers, sortInDescendingOrder, getEvenNumbersFromArray, sortDescendingOrder };

