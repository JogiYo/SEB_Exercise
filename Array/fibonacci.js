function fibonacci(num) {
    let fibo = [];
    // num이 0일 경우 요소를 0만 가진 배열을 리턴한다.
    if(num === 0) {
        return [0];
    }
    // numdl 1일 경우 요소를 0,1을 가진 배열을 리턴한다.
    else if(num === 1) {
        return [0, 1];
    }
    // 피보나치 수열을 가진 배열을 만든다.
    else {
        // 0,1을 먼저 삽입해준다.
        fibo.push(0);
        fibo.push(1);
        for(let i = 2; i <= num; ++i) {
            fibo.push(fibo[i-1] + fibo[i-2]);
        }
    }

    return fibo;
}

let output = fibonacci(5);
console.log(output[5]); // --> 5

output = fibonacci(9)[9];
console.log(output); // --> 34