function diamondOfAsterisks(number) {

    for (let row = 1; row <= number; row++) {
        for (let space = row; space < number; space++) {
            process.stdout.write(" ");
        }
        for (let star = 1; star <= row; star++) {
            process.stdout.write("* ");
        }
        console.log();
    }

    for (let row = number - 1; row >= 1; row--) {
        for (let space = number; space > row; space--) {
            process.stdout.write(" ");
        }
        for (let star = 1; star <= row; star++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

diamondOfAsterisks(3);