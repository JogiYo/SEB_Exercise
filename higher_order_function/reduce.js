// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 합을 리턴
function computeSumOfAllElements(arr) {
    return arr.reduce(function(acc, cur){
      acc += cur
      return acc;
    }, 0);
}

// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 곱을 리턴
function computeProductOfAllElements(arr) {
    return arr.reduce((acc, cur) => acc * cur, 1);
}

// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 평균을 리턴
function computeAverageOfNumbers(arr) {
    // 빈 배열인 경우, 빈 배열을 리턴
    if(arr.length === 0) {
      return 0;
    }
  
    return arr.reduce(function(sum, cur){
      sum += cur;
      return sum;
    }) / arr.length;
}

// 객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴
function calculateScore(records, value) {
    return records.filter(el => el.animal === value).reduce((pre, cur) => pre + cur.score, 0)
}

// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴
function getLongestElement(arr) {
    // 빈 배열일 경우, 빈 배열을 리턴
    if(arr.length === 0) {
      return '';
    }
  
    return arr.reduce((pre, cur) => pre.length >= cur.length ? pre : cur);
}

// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열의 길이를 리턴
function getLengthOfLongestElement(arr) {
    // 빈 배열을 입력받는다면, 0을 리턴
    if(!arr.length) return 0;
    return arr.reduce((a, b) => a.length > b.length ? a : b).length;
}

// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴
function joinArrayOfArrays(arr) {
    return arr.reduce(function(acc, cur) {
      acc.push(...cur);
      return acc;
    });
}

// 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴
function findShortestWord(arr) {
    // tpye이 string인 요소로만 배열을 구성한다.
    arr = arr.filter(el => typeof el === 'string')
    // 배열의 길이가 0이라면 빈 문자열 리턴, 빈 문자가 인자로 들어왔다면 길이도 0일 것이다.
    if(!arr.length) return '';
    return arr.reduce((a,b) => a.length <= b.length ? a : b);
}