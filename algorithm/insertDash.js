// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴
function insertDash(str) {
    if(str.length === 0)  return '';

    let result = str[0];

    for(let i = 1; i < str.length; ++i) {
        if(Number(str[i]) % 2 === 1 && Number(str[i-1] % 2 === 1)) {
            result += '-' + str[i]; 
        }
        else {
            result += str[i];
        }
    }

    return result;
}