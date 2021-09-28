function shadowOfPapers(papers) {
    // 주어진 사각형의 정보를 각 좌표의 시작과 끝을 나타내는 좌표로 변경하여 저장한다.
    let points = [];
    papers.forEach(element => {
        let [x, y, width, height] = element;
        // 사각형의 시작점의 x좌표, 하단 y좌표, 상단 y좌표, 사각형의 시작을 알리는 flag
        points.push([x, y, y + height - 1, 1]);
        // 사각형의 마지막점의 x좌표, 하단 y좌표, 상단 y좌표, 사각형의 마지막을 알리는 flag
        // x좌표는 너비 계산에 누락을 방지하기 위해 범위로 저장한다.
        points.push([x + width, y, y + height - 1, -1]);
    });
    // x축을 기준으로 정렬
    points.sort((a, b) => a[0] - b[0]);
    // 좌표 평면을 좌측에서 우측으로 순회하면서 매좌표까지 사각형이 차지하는 y좌표를 저장한다.
    let height = new Array(10001).fill(0);
    for(let i = points[0][1]; i <= points[0][2]; ++i) height[i] = 1;
    
    let sum = 0;
    for(let i = 1; i < points.length; ++i) {
        // 겹치는 부분을 제외하고 순수하게 높이만 구한다.
        let h = height.reduce((acc, cur) => acc + (cur === 0 ? 0 : 1), 0);
        let x1 = points[i-1][0];
        let x2 = points[i][0];
        sum += (x2 - x1) * h;

        let y1 = points[i][1];
        let y2 = points[i][2];
        // 사각형은 서로 겹칠 수 있으므로, 누적값을 저장해야 한다.
        for(let j = y1; j <= y2; ++j) height[j] += points[i][3];
    }

    return sum;
}

let result = shadowOfPapers([[0, 1, 4, 4]]);
console.log(result); // --> 16

/*
4 | x x x x
3 | x x x x 
2 | x x x x 
1 | x x x x 
0 |   
--------------
    0 1 2 3 4 
*/

result = shadowOfPapers([
  [0, 0, 4, 4],
  [2, 1, 2, 6],
  [1, 5, 5, 3],
  [2, 2, 3, 3],
]);
console.log(result); // --> 36
/*
7 |   x x x x x
6 |   x x x x x
5 |   x x x x x
4 |     x x x
3 | x x x x x
2 | x x x x x
1 | x x x x
0 | x x x x
------------------
    0 1 2 3 4 5 6 7
*/