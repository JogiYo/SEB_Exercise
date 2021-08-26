const robotPath = function (room, src, dst) {
    let new_arr = new Array(room.length);
    for(let i = 0; i < new_arr.length; ++i) {
        new_arr[i] = new Array(room[0].length).fill(0);
    }

    for(let i = 0; i < room.length; ++i) {
        for(let j = 0; j < room[0].length; ++j) {
            if(room[i][j] === 1) new_arr[i][j] = -1;
        }
    }

    const dfs = (m, n, count) => {
        if(m < 0 || m >= new_arr.length || n < 0 || n >= new_arr[0].length) return;

        if(new_arr[m][n] === 0 || new_arr[m][n] > count) {
            new_arr[m][n] = count;
        }
        else  return;

        dfs(m-1, n, count + 1);
        dfs(m+1, n, count + 1);
        dfs(m, n-1, count + 1);
        dfs(m, n+1, count + 1);
    }

    let [m, n] = src;
    dfs(m, n, 0);
    return new_arr[dst[0]][dst[1]];
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