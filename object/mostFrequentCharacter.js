// 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴
function mostFrequentCharacter(str) {
    // 먼저 공백을 제외해주고 공백을 제거한 배열을 다시 붙여줘 str을 만든다
    let new_str = str.split(' ').join('');
    // 빈 문자열일 경우 빈 문자열을 리턴한다
    if(new_str.length === 0) {
      return '';
    }
  
    // 새 객체를 만들어준다
    let obj = {};
    // 수를 비교할 max와 결과를 반환할 변수를 선언해준다
    let max = 0;
    let result;
    // 반복문을 통해서 키값을 생성해준다.
    for(let key of new_str) {
      if(key in obj) {
        obj[key]++;
      }
      else {
        obj[key] = 1;
      }
      // 값을 바꿔주면서 계속 비교를 하여 최댓값과 result를 정해준다.
      if(max < obj[key]) {
        max = obj[key];
        result = key;
      }
    }
  
    return result;
}

let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'

output = mostFrequentCharacter('hello world');
console.log(output); // --> 'l'

output = mostFrequentCharacter('   ');
console.log(output); // --> ''

output = mostFrequentCharacter('');
console.log(output); // --> ''

output = mostFrequentCharacter('abba');
console.log(output); // --> 'b'

//--------------------------------------------------------------
// reference
function mostFrequentCharacter_other(str) {
    let obj = { mostCount: 0, mostFrequent: '' };
    for (let key of str) {
      if (key === ' ') {
        continue;
      }
  
      if (obj[key] === undefined) {
        obj[key] = 0;
      }
      obj[key]++;
  
      if (obj[key] > obj['mostCount']) {
        obj['mostCount'] = obj[key];
        obj['mostFrequent'] = key;
      }
    }
    return obj['mostFrequent'];
}
let output1 = mostFrequentCharacter_other('apples not oranges');
console.log(output1); // --> 'p'

output1 = mostFrequentCharacter_other('hello world');
console.log(output1); // --> 'l'

output1 = mostFrequentCharacter_other('   ');
console.log(output1); // --> ''

output1 = mostFrequentCharacter_other('');
console.log(output1); // --> ''

output1 = mostFrequentCharacter_other('abba');
console.log(output1); // --> 'b'