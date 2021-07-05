// 수를 입력받아 2의 거듭제곱인지 여부를 리턴
function powerOfTwo(num) {
    if(num === 1 || num === 2) {
        return true;
    }

    while(num > 1) {
        if(num % 2 !== 0) {
            return false;
        }
        num /= 2;   
    }

    return ture;
}

let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false