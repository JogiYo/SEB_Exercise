// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴
function letterCapitalize(str) {
    // 빈 문자열일 경우 빈 문자열을 리턴
    if(str.length === 0) {
      return '';
    }
    // 공백 한 칸으로 단어 분리를 시킨다.
    let arr = str.split(' ');
  
    // 반복문을 돌아 단어의 첫글자만 대문자로 바꾼다.
    for(let i = 0; i < arr.length; ++i) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    // 다시 공백을 포함하여 문자열로 연결시킨다.
    return arr.join(' ');
}

let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy "