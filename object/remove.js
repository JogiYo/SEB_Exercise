// 객체와 키를 입력받아 키가 가르키는 속성(property)을 제거
function removeProperty(obj, property) {
    // delete 사용
    delete obj[property];
}
const obj1 = {
    name: 'Sam',
    age: 20,
};
  
removeProperty(obj1, 'name');
console.log(obj1.name);
//--------------------------------------------------------------

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

const obj2 = {
    a: 2,
    b: 'remaining',
    c: 4,
};
  
removeNumberValues(obj2);
console.log(obj2); // --> { b: 'remaining' }
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
const obj3 = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there'],
};
  
removeArrayValues(obj3);
console.log(obj3); // --> { b: 2 }
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
const obj4 = {
    a: 2,
    b: 3,
    c: 4,
};
  
removeOddValues(obj4);
console.log(obj4); // --> { a: 2, c: 4 }