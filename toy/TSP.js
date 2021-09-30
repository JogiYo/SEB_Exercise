function calculateDistance(p1, p2) {
    const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
    const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
    const dist = Math.sqrt(yDiffSquared + xDiffSquared);
    return Math.floor(dist * 100);
}

const TSP = function (places) {
    let min = Number.MAX_SAFE_INTEGER;
    let visited = new Array(places.length).fill(false);

    const dfs = (total, idx, depth) => {
        // 모든 구간을 다 탐색했을 때
        if(depth === places.length) {
            if(min > total) {
                min = total;
            }

            return;
        }

        for(let i = 0; i < visited.length; ++i) {
            // 방문하지 않은 점들을 탐색
            if(!visited[i]) {
                // 방문을 하게 되면 바로 직전에 방문했던 점과의 거리를 구한다.
                let dist = calculateDistance(places[idx], places[i]);
                visited[i] = true;
                dfs(total + dist, i, depth+1);
                visited[i] = false;
            }
        }
    }
    // 처음 시작을 바꿔가면서 거리를 구한다.
    for(let i = 0; i < places.length; ++i) {
        visited[i] = true;
        dfs(0, i, 1);
        visited[i] = false;
    }

    return min;
};

let placesToVisit = [
    [0, 0],
    [1, 1],
    [1, 3],
    [2, 2],
];
let output = TSP(placesToVisit);
console.log(output); // --> 423
// 방문 순서: [0, 0], [1, 1], [2, 2], [1, 3]

placesToVisit = [
    [0, 0],
    [3, 3],
    [-3, 3],
    [2, 3],
    [1, 3],
];
output = TSP(placesToVisit);
console.log(output); // --> 940