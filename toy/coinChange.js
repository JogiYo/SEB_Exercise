const coinChange = function (total, coins) {
    let result = new Array(10001).fill(0);
  
    result[0] = 1;
    for(let i of coins) {
        for(let j = i; j <= total; ++j) {
            result[j] += result[j-i];
        }
    }
    
    return result[total];
};

let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);
console.log(output); // --> 3

total = 4;
coins = [1, 2, 3];
output = coinChange(total, coins);
console.log(output); // --> 4 ([1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3])