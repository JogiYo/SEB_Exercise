const countIslands = function (grid) {
    let arr = new Array(grid.length);
    for(let i = 0; i < arr.length; ++i) {
        arr[i] = [];
    }

    for(let i = 0; i < grid.length; ++i) {
        for(let j = 0; j < grid[0].length; ++j) {
            arr[i].push([...grid[i][j], false]);
        }
    }

    let result = 0;
    const dfs = (row, col, arr) => {
        if(row < 0 || row >= arr.length || col < 0 || col >= arr[0].length) return;
        if(arr[row][col][0] === '0' || arr[row][col][1] === true) return;
        // 상하좌우로 탐색
        arr[row][col][1] = true;
        dfs(row-1, col, arr);
        dfs(row+1, col, arr);
        dfs(row, col-1, arr);
        dfs(row, col+1, arr);
    }

    for(let i = 0; i < arr.length; ++i) {
        for(let j = 0; j < arr[0].length; ++j) {
            if(arr[i][j][0] === '1' && arr[i][j][1] === false) {
                result++;
                dfs(i, j, arr);
            }
        }
    }

    return result;
};
let grid = [
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['1', '1', '0', '0'],
];
let result = countIslands(grid);
console.log(result); // --> 1

grid = [
    ['0', '1', '1', '1', '0'],
    ['0', '1', '0', '0', '0'],
    ['0', '0', '0', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '1', '0'],
];
result = countIslands(grid);
console.log(result); // --> 3