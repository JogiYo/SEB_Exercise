const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      matrix.push(row);
    });
    return matrix;
};

const gossipProtocol2 = function (village, r) {
    // 비상 연락망을 조합하기 위한 리스트 구하기
    const getEcnList = (arr) => {
        let list = [];
        for(let i = 0; i < arr.length; ++i) {
            for(let j = 0; j < arr.length; ++j) {
                if(arr[i][j] === '2') list.push([i, j]);
            }
        }

        return list;
    }
    // nCr 조합
    const comb = (idx, n, r, combArr) => {
        // 모두 선택했을경우
        if (r === 0) {
            return [combArr];
        }
    
        // 선택 개수가 남아있는 개수 이상일 경우 나머지를 모두 선택한다.
        if (n - idx <= r) {
            for (let i = idx; i < n; i++) combArr.push(i);
            return [combArr];
        }
        
        let picked = comb(idx + 1, n, r - 1, combArr.concat(idx));
        let notPicked = comb(idx + 1, n, r, combArr);
        return picked.concat(notPicked);
    };
    
    const MOVES = [
        [-1, 0], // UP
        [1, 0], // DOWN
        [0, 1], // RIGHT
        [0, -1], // LEFT
    ];

    const isValid = (row, col) => row >= 0 && row < village.length && col >= 0 && col < village.length;
    
    const bfs = (points) => {
        let matrix = createMatrix(village);
        let queue = [];

        for(let src of points) {
            let [row, col] = src;
            matrix[row][col] = 0;
            queue.push(src);
        }

        let count = 0;
        while(queue.length !== 0) {
            const [row, col] = queue.shift();
            count = matrix[row][col];

            MOVES.forEach((move) => {
                const [rDiff, cDiff] = move;
                const nextRow = row + rDiff;
                const nextCol = col + cDiff;

                if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === '1') {
                    queue.push([nextRow, nextCol]);
                    matrix[nextRow][nextCol] = matrix[row][col] + 1;
                }
            }); 
        }

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                // 정보가 다 전달되지 않을 수 있다.
                if (matrix[row][col] === '1') return Number.MAX_SAFE_INTEGER;
            }
        }
        return count;
    };

    const list = getEcnList(village);
    const combs = comb(0, list.length, num, []);
    let min = Number.MAX_SAFE_INTEGER;
    combs.forEach((c) => {
        const sources = c.map((idx) => list[idx]);
        const result = bfs(sources);
        min = Math.min(min, result);
    });
    return min;
};

let village = [
    '0022', // 첫 번째 줄
    '0020',
    '0020',
    '0220',
  ];
  let num = 1;
  let output = gossipProtocol2(village, num);
  console.log(output); // --> 0 (이미 모든 주민이 정보를 알고 있는 상태)
  
  village = [
    '1001212',
    '1201011',
    '1102001',
    '2111102',
    '0012111',
    '1111101',
    '2121102',
  ];
  num = 5;
  output = gossipProtocol2(village, num);
  console.log(output); // --> 3 