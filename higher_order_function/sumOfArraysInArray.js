// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴
function sumOfArraysInArray(arr) {
   return arr.map(function(el) {
     el = el.filter(a => typeof a === 'number');
     return el.reduce((a,b) => a+b, 0);
   }).reduce((pre, cur) => pre + cur); 
}

let output = sumOfArraysInArray([
    [1, 2],
    [undefined, 4, '5'],
    [9, 'hello'],
]);
console.log(output); // --> 16