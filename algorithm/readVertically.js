// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴
function readVertically(arr) {
  // 세로로 단어를 만들 새 배열이 필요하다.
  let temp = [];
  for(let i = 0; i < arr.length; ++i) {
    let str = arr[i];
    for(let j = 0; j < str.length; ++j) {
      if(temp.length === j) {
        temp.push(str[j]);
      }
      else {
        temp[j] += str[j];
      }
    }
  }

  let result = '';
  for(let key of temp) {
    result += key;
  }
  return result;
}