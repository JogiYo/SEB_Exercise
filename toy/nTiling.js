function nTiling(n) {
    let dp = [];
    dp.push(0);
    dp.push(1);
    dp.push(2);

    for(let i = 3; i <= n; ++i) {
        dp.push(dp[i-1] + dp[i-2]);
    }

    return dp[n];
}

let output = nTiling(2);
console.log(output); // --> 2

output = nTiling(4);
console.log(output); // --> 5