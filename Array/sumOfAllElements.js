function sumOfAllElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = 0;
    // for문을 통해 각 엘리먼트들을 sum에 더해준다.
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    // 엘리먼트 요소가 없다면 sum은 0을 반환할 것이다.
    return sum;
  }

  console.log(sumOfAllElements([1,2,3,4]));