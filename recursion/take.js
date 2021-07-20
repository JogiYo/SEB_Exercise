// 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴
function take(num, arr) {
    if(num > arr.length) return arr;
    if(num === 0) return [];
    return [arr[0], ...take(num-1, arr.slice(1))];
}

let output = take(2, [1, -2, 1, 3]);
console.log(output); // --> [1, -2]

output = take(5, [1, -2, 1, 3]);
console.log(output); // --> [1, -2, 1, 3]