const robotPath = function (room, src, dst) {
    let visited = new Array(room.length);
    for(let i = 0; i < visited.length; ++i) {
        visited[i] = new Array(room[0].length).fill(false);
    }

    // 1인 부분 true로 바꿔주기
    for(let i = 0; i < room.length; ++i) {
        for(let j = 0; j < room[0].length; ++j) {
            if(room[i][j] === 1) visited[i][j] = true;
        }
    }
    
    let queue = [];
    queue.push([...src, 0]);

    while(queue.length !== 0) {
        let point = queue.shift();
        let m = point[0];
        let n = point[1];
        let step = point[2];
        visited[m][n] = true;

        if(m === dst[0] && n === dst[1]) return step;
        // 상
        if(m-1 >= 0 && room[m-1][n] === 0 && !visited[m-1][n]) {
            queue.push([m-1, n, step + 1]);
        }
        // 하
        if(m+1 < room.length && room[m+1][n] === 0 && !visited[m+1][n]) {
            queue.push([m+1, n, step + 1]);
        }
        // 좌
        if(n-1 >= 0 && room[m][n-1] === 0 && !visited[m][n-1]) {
            queue.push([m, n-1, step + 1]);
        }
        //  우
        if(n+1 < room[0].length && room[m][n+1] === 0 && !visited[m][n+1]) {
            queue.push([m, n+1, step + 1]);
        }
    }

    return null;
};
let room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
  ];
  let src = [4, 2];
  let dst = [2, 2];
  let output = robotPath(room, src, dst);
  console.log(output); // --> 8