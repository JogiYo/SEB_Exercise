// 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴
// 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
// 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열
function ABCheck(str) {
    str = str.toUpperCase();
    
    for(let i = 0; i < str.length - 4; ++i) {
        if(str[i] === 'A' || str[i] === 'B') {
            if(str[i] === 'A' && i + 4 < str.length  && str[i+4] === 'B') {
                return true;
            }
            else if(str[i] === 'B' && i + 4 < str.length  && str[i+4] === 'A') {
                return true;
            }
        }
    }

    return false;
}