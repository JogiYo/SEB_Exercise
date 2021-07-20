// 배열을 입력받아 순서가 뒤집힌 배열을 리턴
function reverseArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr.length === 0) return [];
    if(arr.length === 1) return arr;
  
    return [arr[arr.length-1], ...reverseArr(arr.slice(0, arr.length-1))];
}
// other way
// function reverseArr(arr) {
//     if (arr.length === 0) {
//       return [];
//     }
//     const head = arr[0];
//     const tail = arr.slice(1);
//     return reverseArr(tail).concat(head);
// }

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]