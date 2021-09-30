function boardGame(board, operation) {
    let ROW = board.length - 1;
    let COL = board[0].length - 1;

    const isValid = (row, col) => {
        if(row < 0 || col < 0 || row > ROW || col > COL) return false;
        return true;
    }

    let cur_r = 0;
    let cur_c = 0;
    let sum = 0;
    for(let i = 0; i < operation.length; ++i) {
        if(operation[i] === 'U') {
            if(isValid(cur_r-1, cur_c)) {
                cur_r -= 1;
                sum += board[cur_r][cur_c];
            }
            else return 'OUT'
        }
        else if(operation[i] === 'D') {
            if(isValid(cur_r+1, cur_c)) {
                cur_r += 1;
                sum += board[cur_r][cur_c];
            }
            else return 'OUT'
        }
        else if(operation[i] === 'L') {
            if(isValid(cur_r, cur_c-1)) {
                cur_c -= 1;
                sum += board[cur_r][cur_c];
            }
            else return 'OUT'
        }
        else if(operation[i] === 'R') {
            if(isValid(cur_r, cur_c+1)) {
                cur_c += 1;
                sum += board[cur_r][cur_c];
            }
            else return 'OUT'
        }
    }

    return sum;
};

const board1 = [
    [0, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]
  ]
  const output1 = boardGame(board1, 'RRDLLD');
  console.log(output1); // 4
  
  
  const board2 = [
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0]
  ]
  const output2 = boardGame(board2, 'UUUDD');
  console.log(output2); // 'OUT'
  
  const board3 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
  ]
  const output3 = boardGame(board3, 'DDRRRUDUDUD');
  console.log(output3); // 0