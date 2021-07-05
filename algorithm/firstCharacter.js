//문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴
function firstCharacter(str) {
    // 빈 문자열인 경우 빈 문자열 리턴
    if(str.length === 0) {
      return '';
    }
  
    // 공백을 통해 배열로 나눠준다.
    let arr = str.split(' ');
    let result = '';
    // 반복문을 돌면서 단어의 첫 글자를 연결한다
    for(let key of arr) {
      result += key[0];
    }
    // 결과 리턴
    return result;
}

let output = firstCharacter('hello world');
console.log(output); // --> "hw"

output = firstCharacter(
  'The community at Code States might be the biggest asset'
);
console.log(output); // --> "TcaCSmbtba"