const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
        const row = [];
        for (let i = 0; i < line.length; i++) row.push(line[i]);
        matrix.push(row);
    });
    return matrix;
};

const gossipProtocol = function (village, row, col) {
    // TODO: 여기에 코드를 작성합니다.
    let matrix = createMatrix(village);
    let queue = [];
    let max = 0;

    queue.push([row, col, 0]);
    matrix[row][col] =  'x';

    while(queue.length !== 0) {
        let [r, c, days] = queue.shift();
        max = Math.max(max, days);
        // 상
        if(r-1 >= 0 && matrix[r-1][c] === '1') {
            queue.push([r-1, c, days+1]);
            matrix[r-1][c]  = 'x';
        }
        // 하
        if(r+1 < matrix.length && matrix[r+1][c] === '1') {
            queue.push([r+1, c, days+1]);
            matrix[r+1][c]  = 'x';
        }
        // 좌
        if(c-1 >= 0 && matrix[r][c-1] === '1') {
            queue.push([r, c-1, days+1]);
            matrix[r][c-1]  = 'x';
        }
        // 우
        if(c+1 < matrix[0].length && matrix[r][c+1] === '1') {
            queue.push([r, c+1, days+1]);
            matrix[r][c+1]  = 'x';
        }
    }

    return max;
};

let village = [
    '0101', // 첫 번째 줄
    '0111',
    '0110',
    '0100',
  ];
  let row = 1;
  let col = 2;
  let output = gossipProtocol(village, row, col);
  console.log(output); // --> 3