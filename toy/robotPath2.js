const robotPath2 = function (room, src, sDir, dst, dDir) {
    let new_arr = new Array(room.length);
    for(let i = 0; i < new_arr.length; ++i) {
        new_arr[i] = new Array(room[0].length).fill(0);
    }

    for(let i = 0; i < room.length; ++i) {
        for(let j = 0; j < room[0].length; ++j) {
            if(room[i][j] === 1) new_arr[i][j] = -1;
        }
    }

    let [r, c] = src;
    let queue = [[r, c, sDir, 0]];
    new_arr[r][c] = 'x';

    // 상 : 1, 우 : 2, 하 : 3, 좌 : 4
    while(queue.length !== 0) {
        let [row, col, dir, count] = queue.shift();
        new_arr[row][col] = 'x';

        if(row === dst[0] && col === dst[1]) {
            let rotate = Math.abs(dir - dDir)
            if(rotate === 0) return count;
            else if(rotate === 1) return count + 1;
            else return count + 2;
        }
        // 상
        if(row - 1 >= 0 && new_arr[row-1][col] === 0) {
            let cnt = Math.abs(dir - 1);
            if(cnt === 0) queue.push([row-1, col, 1, count]);
            else queue.push([row-1, col, 1, count + cnt + 1]);
        }
        // 하
        if(row + 1 < new_arr.length && new_arr[row+1][col] === 0) {
            let cnt = Math.abs(dir - 3);
            if(cnt === 0) queue.push([row+1, col, 3, count]);
            else queue.push([row+1, col, 3, count + cnt + 1]);
        }
        // 좌
        if(col - 1 >= 0 && new_arr[row][col-1] === 0) {
            let cnt = Math.abs(dir - 4);
            if(cnt === 0) queue.push([row, col-1, 4, count]);
            else queue.push([row, col-1, 4, count + cnt + 1]);
        }
        // 우
        if(col + 1 <= new_arr[0].length && new_arr[row][col+1] === 0) {
            let cnt = Math.abs(dir - 2);
            if(cnt === 0) queue.push([row, col+1, 2, count]);
            else queue.push([row, col+1, 2, count + cnt + 1])
        }
    }
};

let room = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
  ];
  let src = [3, 0];
  let sDir = 3;
  let dst = [2, 2];
  let dDir = 2;
  let output = robotPath2(room, src, sDir, dst, dDir);
  console.log(output); // --> 11

  room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
  ];
  src = [4, 2];
  sDir = 1;
  dst = [2, 2];
  dDir = 3;
  output = robotPath2(room, src, sDir, dst, dDir);
  console.log(output); // --> 7