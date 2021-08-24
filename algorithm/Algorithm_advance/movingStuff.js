function movingStuff(stuff, limit) {
    // TODO: 여기에 코드를 작성합니다.
    // 짐을 무게를 기준으로 정렬, 상자에 들어갈 짐의 무게 합산 변수 sum
    stuff.sort((a,b) => a-b);
    let visited = new Array(stuff.length).fill(false);
  
    let result = 0;
    for(let i = 0; i < stuff.length; ++i) {
      if(!visited[i]) {
        result++;
        visited[i] = true;
  
        let sum = stuff[i];
        for(let j = stuff.length-1; j >= i; j--) {
          if(!visited[j] && sum + stuff[j] <= limit) {
            visited[j] = true;
            sum += stuff[j];
          }
        }
      }
    }
  
    return result;
}