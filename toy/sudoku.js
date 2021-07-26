const sudoku = function (board) {
    // TODO: 여기에 코드를 작성합니다.
    let solution = (board, row, col) => {
          // 한 줄을 다 채우면 다음 행에서 진행한다.
          if(col === 9) {
              return solution(board, row + 1, 0);
          }
          // 행 index가 9가 됐다면 스도쿠가 완성이 된 것이다.
          if(row === 9) {
              return board;
          }
          // 이제 가능한 수를 찾는다.
          if(board[row][col] === 0) {
              for(let i = 1; i <= 9; ++i) {
                  // 가능한지를 판단하고, 가능하다면 한 칸 옮겨 진행한다.
                  if(possible(board, row, col, i)) {
                      board[row][col] = i;
                      let found = solution(board, row, col + 1);
                      // 만족하는 위치가 없다면 다시 값을 되돌려준다
                      if(found === null) {
                          board[row][col] = 0;
                      }
                      else return found;
                  }
              }
              
              return null;
          }
  
          // 수가 차있을 경우에는 바로 한 칸 옮겨 진행한다.
          return solution(board, row, col + 1);
      }
  
      let possible = (board, row, col, num) => {
          // 열을 체크한다.
          for(let i = 0; i < 9; ++i) {
              if(board[row][i] === num) return false;
          }
  
          // 행을 체크한다.
          for(let i = 0; i < 9; ++i) {
              if(board[i][col] === num) return false;
          }
  
          // 3*3 행렬을 체크한다.
          let s_row = parseInt(row/3) * 3;
          let s_col = parseInt(col/3) * 3;
          for(let i = s_row; i < s_row + 3; ++i) {
              for(let j = s_col; j < s_col + 3; ++j) {
                  if(board[i][j] === num) return false;
              }
          }
  
          // 모두 걸러지지 않는다면 가능한 수이다.
          return true;
      }
  
      return solution(board, 0, 0);
  };