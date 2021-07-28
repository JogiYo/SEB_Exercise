// 두 수를 입력받아 거듭제곱을 리턴
function power(base, exponent) {
    if(exponent === 0) return 1;

    let half_exp = parseInt(exponent/2);
    let num = power(base, half_exp);
    let result = (num * num) % 94906249;

    if(exponent % 2 === 1) result = (result * base) % 94906249;
    return result;
}

let output = power(3, 40);
console.log(output); 