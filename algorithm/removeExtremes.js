// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴
function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let max_idx = 0;
    let min_idx = 0;
    let max_length = arr[0].length;
    let min_length = arr[0].length;
  
    for(let i = 1; i  < arr.length; ++i) {
      if(max_length <= arr[i].length) {
        max_idx = i;
        max_length = arr[i].length;
      }
      if(min_length >= arr[i].length) {
        min_idx = i;
        min_length = arr[i].length;
      }
    }
  
    let result = [];
    for(let i = 0; i < arr.length; ++i) {
      if(i === max_idx || i=== min_idx) continue;
      result.push(arr[i]);
    }
  
    return result;
}