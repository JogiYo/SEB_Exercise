// 객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거
function removeNumberValues(obj) {
    // 반복문을 통해 처리를 해준다
    for(let key in obj) {
      // 키에 해당하는 값이 넘버 타입이라면 제거한다.
      if(typeof(obj[key]) === 'number') {
        delete obj[key];
      }
    }
}

const obj1 = {
    a: 2,
    b: 'remaining',
    c: 4,
};
  
removeNumberValues(obj1);
console.log(obj1); // --> { b: 'remaining' }
//--------------------------------------------------------------

// 객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거
function removeArrayValues(obj) {
    // 반복문을 통해 처리한다
    for(let key in obj) {
      // obj[key]가 배열이라면 삭제를 해준다.
      if(Array.isArray(obj[key])) {
        delete obj[key];
      }
    }
}
const obj2 = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there'],
};
  
removeArrayValues(obj2);
console.log(obj2); // --> { b: 2 }
//--------------------------------------------------------------

// 객체를 입력받아 홀수를 값으로 갖는 속성을 모두 제거
function removeOddValues(obj) {
    // 반복문을 통해서 처리한다
    for(let key in obj) {
      if(typeof(obj[key]) === 'number') {
        // 키에 대한 값이 홀수라면 속성을 제거한다.
        if(obj[key] % 2 === 1) {
          delete obj[key];
        }
      }
    }
}
const obj3 = {
    a: 2,
    b: 3,
    c: 4,
};
  
removeOddValues(obj3);
console.log(obj3); // --> { a: 2, c: 4 }
//--------------------------------------------------------------

// 객체를 입력받아 속성의 개수를 리턴
function countNumberOfKeys(obj) {
    return Object.keys(obj).length;
}
const obj4 = {
    a: 1,
    b: 2,
    c: 3,
};
  
let output = countNumberOfKeys(obj4);
console.log(output); // --> 3
//--------------------------------------------------------------

// 객체를 입력받아 키, 값 쌍을 표현하는 문자열을 리턴
// 각 문자열은 한 줄에 키: 값 형태로 구성되며, 각 문자열 끝에는 줄바꿈 문자가 포함
function printObject(obj) {
    // 결과를 저장할 변수
    let result = '';
    // 반복문을 통해 처리한다.
    for (const [key, value] of Object.entries(obj)) {
    result += `${key}: ${value}\n`;
    }
  
    // 결과를 반환한다.
    return result;
}
const obj5 = { name: 'Steve', age: 13, gender: 'Male' };
let result = printObject(obj5);
console.log(result);
//--------------------------------------------------------------