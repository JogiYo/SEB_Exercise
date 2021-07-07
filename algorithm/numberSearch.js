// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴
function numberSearch(str) { 
    // 빈 문자열일 경우 0 리턴
    if(str.length === 0) {
      return 0;
    }
    // 공백 제거
    str = str.replace(/ /g, '');
    // 정규식을 통해 숫자만으로 구성된 문자열을 만든다.
    let regex = /[^0-9]/g;
    let num_str = str.replace(regex, '');
    let divider = str.length - num_str.length;
  
    // 숫자들을 더해준다.
    let sum = 0;
    for(let i = 0; i < num_str.length; ++i) {
      sum += Number(num_str.charAt(i));
    }
    // 반올림
    return Math.round(sum/divider);
}

let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2