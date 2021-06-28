function getEvenNumbers(arr) {
    let result = [];
    // 각 요소가 짝수라면 결과 배열에 넣어준다.
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

// filter를 이용한 방법
function getEvenNumbers_usingFilter(arr) {
    return arr.filter(e => e % 2 === 0);
}

console.log(getEvenNumbers([1,2,3,4]));
console.log(getEvenNumbers_usingFilter([5,6,7,8,9]));