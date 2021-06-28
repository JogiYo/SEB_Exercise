function getLargestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; ++i) {
      max = Math.max(max, arr[i]);
    }
  
    return max;
    // return arr.reduce((a,b) => a > b ? a : b);
  }


function getLargestElementUsingreduce(arr){
    return arr.reduce((a,b) => a > b ? a : b);
}

console.log(getLargestElement([1, 4, 2, 3]));
console.log(getLargestElementUsingreduce([11, 222, 444, 333, 22]));