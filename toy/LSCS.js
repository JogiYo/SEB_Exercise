const LSCS = function (arr) {
    let sum = arr[0];
    let max = arr[0];
  
    for(let i = 1; i < arr.length;  ++i) {
      // [-7, -1, 3]일 경우
      // -7이 sum일 때 -1이 합의 최댓값이 된다 (-8, -1), 그 다음 (-1 + 3, 3) 이므로 다시 sum 은 3이 된다.
      // sum은 값을 계속 더 할지, 새로운 값을 가져올 지 정하는 장치이다.
      // 합이 계속 양수라면 더해지지만, 합이 음수이고 현재 값이 합보다 크면 갱신을 해야한다.
      sum = Math.max(sum + arr[i], arr[i]);
      max = Math.max(max, sum);
    }
  
    return max;
};