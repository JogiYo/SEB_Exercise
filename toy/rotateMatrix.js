const rotateMatrix = function (matrix, rotateCnt) {
    if(matrix.length === 0) return [];
    // n은 행, m은 열
    let n = matrix.length;
    let m = matrix[0].length;
    // 빈 배열일 때 빈 배열을 리턴
    if(m === 0) return [];

    if(rotateCnt === undefined) rotateCnt =1
    rotateCnt %= 4;
    // 회전을 하지 않았다면 원래 행렬 리턴
    if(rotateCnt === 0) return matrix;

    let rotated_matrix = [];
    let row_len, col_len;
    if(rotateCnt % 2 === 1) {
        row_len = m;
        col_len = n;
    }
    else {
        row_len = n;
        col_len = m;
    }

    for(let row = 0; row < row_len; ++row) {
        rotated_matrix[row] = new Array(col_len);
        for(let col = 0; col < col_len; ++col) {
            if(rotateCnt === 1) rotated_matrix[row][col] = matrix[n - col - 1][row];
            else if(rotateCnt === 2) rotated_matrix[row][col] = matrix[n - row - 1][m - col  - 1];
            else rotated_matrix[row][col] = matrix[col][m - row - 1];
        }
    }

    return rotated_matrix;
}