// using recursion and memoization
function fibonacci(n) {
    let memo = [0, 1];

    let fibo = (n) => {
        if(memo[n] === undefined) {
            memo[n] = fibo(n-1) + fibo(n-2);
        }
        return memo[n];
    };

    return fibo(n);
}

let output = fibonacci(9);
console.log(output);