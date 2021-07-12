// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴
function findBugInApples(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let row = arr.length;
  
    let result = [];
  
    for(let i = 0; i < row; ++i) {
      for(let j = 0; j < arr[i].length; ++j) {
        if(arr[i][j] === 'B') {
          result.push(i);
          result.push(j);
          break;
        }
      }
    }
  
    return result;
}  