// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴
function computeSquareRoot(num) {
    let aprx = 1;
    // 바빌로니아 방법(Babylonian method) X(n+1) = 1/2 * (X(n) + S/X(n))
    while(aprx * aprx !== num) {
      if(Number((aprx * aprx).toFixed(2)) === num) {
        break;
      }
  
      aprx = (aprx + (num  / aprx)) / 2;
    }
  
    return Number(aprx.toFixed(2));
}

let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45