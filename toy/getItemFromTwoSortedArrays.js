const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    let left_idx = 0;
    let right_idx = 0;
    
    while(k > 0) {
      // 7번째 요소를 찾는다고 하면, 두 배열에서 모두 4번째까지는 확인을 해봐야하기 때문에 올림을 해준다.
      let count = Math.ceil(k/2);
      let left_count = count;
      let right_count = count;
      // 왼쪽 인덱스가 첫 배열의 길이와 같다면 모두 탐색한 것이기 때문에 두번째 배열의 인덱스를 k만큼 더해준다.
      if(left_idx === arr1.length) {
        right_idx += k;
        break;
      }
  
      // 오른쪽 인덱스가 두번째 배열의 길이와 같다면 모두 탐색한 것이기 때문에 첫 배열의 인덱스를 k만큼 더해준다.
      if(right_idx === arr2.length) {
        left_idx += k;
        break;
      }
      // 탐색할 요소의 수가 남은 요소의 수보다 크다면 탐색할 요소의 수를 재조정해준다.
      if(left_count > arr1.length - left_idx) {
        left_count = arr1.length - left_idx;
      }
      if(right_count > arr2.length - right_idx) {
        right_count = arr2.length - right_idx;
      }
  
      // 값을 비교한다, 배열에서 k번째 요소는 arr[k-1]이기 때문에 -1한 만큼의 인덱스에서 찾는다.
      // 값이 작은 배열에서 인덱스를 옮겨준다. 그 후 남은 요소에서 인덱스만큼 빼준다.
      if(arr1[left_idx + (left_count - 1)] < arr2[right_idx + (right_count - 1)]) {
        left_idx += left_count;
        k -= count;
      }
      else {
        right_idx += right_count;
        k -= count;
      }
    }
    // 탐색을 끝냈다면 두 배열의 요소에서 큰 것이 k 번째 수가 된다.
    return Math.max(arr1[left_idx  - 1], arr2[right_idx - 1]);
  };

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3