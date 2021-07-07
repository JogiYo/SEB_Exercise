// 배열과 임의의 값(discarder)을 입력받아 기존 배열에서 discarder와 일치하는 요소가 제거된 새로운 배열을 리턴
function removeElement(arr, discarder) {
    return arr.filter((el) => el !== discarder)
}

// 배열과 임의의 값(keeper)을 입력받아 기존 배열에서 keeper와 일치하는 요소만을 갖는 새로운 배열을 리턴
function keep(arr, keeper) {
    // 빈 배열일 경우 빈 배열을 리턴
    if(arr.length === 0) {
      return [];
    }
  
    return arr.filter((el) => el === keeper);
}

// 문자열을 요소로 갖는 배열을 입력받아 그 길이가 홀수인 요소만을 갖는 배열을 리턴
function filterOddLengthWords(words) {
    // 빈 배열일 경우 빈 배열을 리턴
    if(words.length === 0) {
      return [];
    }
    
    return words.filter((el) => (el.length % 2) === 1)
}

// 정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴
function getIndex(arr, num) {
    // 빈 배열인 경우 0을 리턴
    if(arr.length === 0) {
      return 0;
    }
    // 배열에서 num보다 작은 값들을 걸러내면 그 길이가 num이 들어갈 index다.
    return arr.filter((el) => el < num).length;
}
// ==========================================================================
// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴
function lessThan100(number) {
    return number < 100;
}
  
function getElementsLessThan100AtProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    // 값이 배열인 경우
    if(Array.isArray(obj[property])){
      return obj[property].filter(function(el) {
        if(typeof(el) === 'number') {
          return lessThan100(el);
        }
        else {
          return false;
        }
      });
    } 
    // 아닌경우
    else {
      return [];
    }
}