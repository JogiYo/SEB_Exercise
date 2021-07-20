// 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴
function flattenArr(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArr(val) : val), []);
}

// other way 1
// function flattenArr(arr) {
//     // base case
//     if (arr.length === 0) {
//       return [];
//     }
  
//     // recursive case
//     const head = arr[0];
//     const tail = arr.slice(1);
//     if (Array.isArray(head)) {
//       return flattenArr([...head, ...tail]);
//     } else {
//       return [head].concat(flattenArr(tail));
//     }
//   }
  
  // other way 2
  // function flattenArr(arr) {
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (Array.isArray(arr[i])) {
  //       const flattend = flattenArr(arr[i]);
  //       result.push(...flattend);
  //     } else {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // }

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]]);
console.log(output); // --> [2, 3, 4, 5]