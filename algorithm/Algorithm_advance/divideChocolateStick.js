function divideChocolateStick(M, N) { 
    const gcd  = (a, b) => {
        while(b != 0) {
            let r = a % b;
            a = b;
            b = r
        }
        return a;
    }
    
    let GCD = gcd(M, N);
    let result = [];

    for(let i = 1; i <= Math.sqrt(GCD); ++i) {
        if(GCD % i === 0) {
            result.push([i, M/i, N/i]);
            
            let mok = GCD / i;
            let mok_m = M / mok;
            let mok_n = N / mok;
            if(i !== mok) {
                result.push([mok, mok_m, mok_n]);
            }
        }
    }

    result.sort((a,b) => a[0] - b[0]);
    return result;
}

let M = 4;
let N = 8;
let output = divideChocolateStick(M, N);
console.log(output);
// [[1, 4, 8], [2, 2, 4], [4, 1, 2]]