const decompression = function (image) {
    const dfs = (row_s, row_e, col_s, col_e) => {
        // 한 칸일 때 리턴을 한다.
        if(row_s === row_e) return image[row_s][col_s] + '';

        // 구간을 4등분해서 재귀적으로 실행한다.
        let row_mid = parseInt((row_s + row_e)/2);
        let col_mid = parseInt((col_s + col_e)/2);

        let left_up = dfs(row_s, row_mid, col_s, col_mid);
        let right_up = dfs(row_s, row_mid, col_mid+1, col_e);
        let left_down = dfs(row_mid+1, row_e, col_s, col_mid);
        let right_down = dfs(row_mid+1, row_e,  col_mid+1, col_e);
        
        let result = left_up + right_up + left_down + right_down;
        // 4구간이 모두 1일 경우
        if(result === '1111') return '1';
        // 모두 0일 경우
        else if(result === '0000') return '0';
        // 다를경우
        else return 'X' + result;
    }

    return dfs(0, image.length-1, 0, image[0].length-1);
};

let image = [
    [1, 0, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
];
let result = decompression(image);
console.log(result); // --> 'XX100110X1100​'

image = [
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result); // --> 'X0X101X10101X00X10011'