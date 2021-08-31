const robotPath2 = function (room, src, sDir, dst, dDir) {
    let new_arr = new Array(room.length);
    for(let i = 0; i < new_arr.length; ++i) {
        new_arr[i] = new Array(room[0].length).fill(Number.MAX_SAFE_INTEGER);
    }

    let [r, c] = src;
    let queue = [[r, c, sDir]];
    new_arr[r][c] = 0;

    while(queue.length !== 0) {
        let [row, col, dir] = queue.shift();

        for(let i = 1; i <= 4; ++i) {
            let cur_r = row;
            let cur_c = col;

            if(i === 1) cur_r -= 1;
            else if(i === 2) cur_c += 1;
            else if(i === 3) cur_r += 1;
            else cur_c -= 1;

            if(cur_r < 0 || cur_c < 0 || cur_r >= room.length || cur_c >= room[0].length || room[cur_r][cur_c] === 1) continue;

            let rotate = Math.abs(i - dir);
            let count;
            // 직진까지 포함
            // 방향에 따라 움직인 횟수를 가져온다.
            if(rotate === 0) {
                count = new_arr[row][col] || 1;
            }
            else if(rotate % 2 === 1) {
                count = new_arr[row][col] + 2
            }
            else {
                count = new_arr[row][col] + 3
            }

            // 도착지점이라면 회전만 해준다.
            if(cur_r === dst[0] && cur_c === dst[1]) {
                let dif = Math.abs(i - dDir);
                if(dif % 2 === 1) dif = 1;
                count += dif;
            }
            // 각 지점에서의 움직인 횟수를 갱신한다.
            if(count < new_arr[cur_r][cur_c]) {
                queue.push([cur_r, cur_c, i]);
                new_arr[cur_r][cur_c] = count;
            }
        }
    }

    return new_arr[dst[0]][dst[1]];
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