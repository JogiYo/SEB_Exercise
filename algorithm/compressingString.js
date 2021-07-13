// 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴
function compressString(str) {
    if(str.length === 0) {
      return '';
    }
  
    let result = '';
    let temp_str = str[0];
    let count = 1;
  
    for(let i = 1; i < str.length; ++i) {
      if(temp_str ===  str[i]) {
        count++;
        continue;
      }
      else {
        if(count > 2) {
          result += count + temp_str;
        }
        else {
          while(count > 0) {
            result += temp_str;
            count--;
          }
        }
        temp_str = str[i];
        count = 1;
      }
    }
    // 마지막에 연속적으로 반복된 문자열이 있을 경우를 생각해야 한다.
    if(count > 0) {
      if(count > 2) {
          result += count + temp_str;
      }
      else {
        while(count > 0) {
          result += temp_str;
          count--;
        }
      }
    }
  
    return result;
}