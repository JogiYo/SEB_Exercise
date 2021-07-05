function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 빈 문자열이면 true를 리턴
    if(str.length === 0) {
      return true;
    }
    // 대소문자를 구별하지 않으니 모두 대문자로 바꾼값으로 연산을한다.
    // 알파벳이 나왔는지를 구별하기 위한 객체를 선언하고, 빈 객체를 할당한다.
    let trans_str = str.toUpperCase();
    let char_obj = {};
    // 문자열을 돌면서 처음 나온다면 키값과 값을 할당하고, 그것이 아니면 for문을 중단하고 false를 리턴한다.
    for(let ch of trans_str) {
      if(char_obj[ch] === undefined) {
        char_obj[ch] = 1;
      }
      else {
        return false;
        break;
      }
    }
    // for문을 빠져나왔다면 중복되는 알파벳이 없는 것이므로 true를 리턴한다.
    return true;
}

let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output)  // false