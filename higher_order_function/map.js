// 수를 요소로 갖는 배열을 입력받아 각 요소를 2배 곱한 새로운 배열을 리턴
function getDoubledElements(arr) {
    // 빈 배열을 입력받는 경우, 빈 배열 리턴
    if(arr.length === 0) {
      return [];
    }
  
    return arr.map(function(el) {
      if(typeof(el) === 'number') {
        el = 2 * el;
      }
      return el;
    });
}

// 문자열을 요소로 갖는 배열을 입력받아 각 요소의 길이를 요소로 갖는 새로운 배열을 리턴
function getLengthOfElements(arr) {
    return arr.map(a => a.length);
}

// 수를 요소로 갖는 배열을 입력받아 각 요소가 2의 배수인지에 대한 정보를 요소로 갖는 새로운 배열을 리턴
function checkEvenOrNot(arr) {
    // 빈 배열일 경우, 빈 배열 리턴
    if(arr.length === 0) {
      return [];
    }
  
    return arr.map(function(el) {
      if(el === 0 || el % 2 !== 0) {
        return 'no';
      }
      
      return 'ok';
    });
}

// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 이름 전체를 요소로 갖는 배열을 리턴
function getFullNames(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 빈 배열인 경우, 빈 배열 리턴
    if(arr.length === 0) {
      return [];
    }
  
    return arr.map(function(el) {
      let fullname = el['firstName'] + ' ' + el['lastName'];
      return fullname;
    });
}

// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 배열의 각 요소를 제곱한 새로운 배열을 리턴
function square(number) {
    return number * number;
}
  
function getSquaredElementsAtProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    if(Array.isArray(obj[property])) {
      return obj[property].map(el => square(el));
    }
    else {
      return [];
    }
}

// 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 요소로 갖는 배열을 리턴
function getOnlyAllowedToDrink(arr) {
    // 빈 배열인 경우, 빈 배열을 리턴
    if(arr.length === 0) {
      return [];
    }
  
    let filtered_arr = arr.filter(function(el) {
      if(el.age >= 18) return true;
      return false;
    });
  
    return filtered_arr.map(function(el){
      return el.name;
    }) 
}