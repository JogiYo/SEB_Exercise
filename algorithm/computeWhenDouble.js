function computeWhenDouble(interestRate) {
    let original = 1;
    let year = 0;

    while(original < 2) {
        original *= (1 +(interestRate/100));
        year++;
    }

    return year;
}

let output = computeWhenDouble(7);
console.log(output);

output = computeWhenDouble(10);
console.log(output);