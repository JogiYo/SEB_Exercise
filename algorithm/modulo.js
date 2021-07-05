// 두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴
// '/', '%' 연산자 사용 불가능
function modulo(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    if(num1 === 0) {
      return 0;
    }
    if(num2 === 0) {
      return 'Error: cannot divide by zero';
    }
  
    while(num1 >= num2) {
      num1 -= num2;
    }
  
    return num1;
}

let output = modulo(25, 4);
console.log(output); 