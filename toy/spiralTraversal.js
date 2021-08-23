const spiralTraversal = function (matrix) {
    let result = matrix[0][0];
    let R_len = matrix.length;
    let C_len = matrix[0].length;

    let move = 0;
    let row = 0, col = 0;
    let dir = 0;

    matrix[0][0] = 0;
    move += 1;
    while(move < R_len * C_len) {
        let row_move = 0;
        let col_move = 0;
        if(dir % 4 === 0) {
            col_move = 1;
        }
        else if(dir % 4 === 1) {
            row_move = 1;
        }
        else if(dir % 4 === 2) {
            col_move = -1;
        }
        else {
            row_move = -1;
        }

        while(row + row_move >= 0 && row + row_move < R_len && col + col_move >= 0 && col + col_move < C_len && (matrix[row + row_move][col + col_move] !== 0)) {
            row += row_move;
            col += col_move;
            result += matrix[row][col];
            matrix[row][col] = 0;
            move++;
        }

        dir++;
    }

    return result;
};

let matrix = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
  ];
let output = spiralTraversal(matrix);
console.log(output); // --> 'ABCFIHGDE'

matrix = [
['T', 'y', 'r', 'i'],
['i', 's', 't', 'o'],
['n', 'r', 'e', 'n'],
['n', 'a', 'L', ' '],
];
output = spiralTraversal(matrix);
console.log(output); // --> 'Tyrion Lannister'