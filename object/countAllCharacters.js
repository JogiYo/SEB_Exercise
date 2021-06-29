// 문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴
function countAllCharacters(str) {
    // 빈 문자열일 경우, 빈 객체 리턴
    if(str.length === 0) {
      return {};
    }
    // 새 객체 선언
    let obj = {};
    // 문자열을 반복문을 통해서 처리해준다
    for(let key of str) {
      // 객체에 존재한다면 값만 바꿔준다.
      if(key in obj) {
        obj[key]++;
      }
      // 존재하지않는다면 추가를 해준다.
      else {
        obj[key] = 1;
      }
    }
  
    return obj;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}