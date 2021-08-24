function connectedVertices(edges) {
    let max = 0;
    for(let el of edges) {
        max = Math.max(Math.max(el[0], el[1]), max);
    }
    // 행렬 만들어 주기 모든 값 0
    let matrix = new Array(max+1);
    for(let i = 0; i <= max; ++i) {
        matrix[i] = new Array(max+1).fill(0);
    }
    // 양방향 인접행렬 만들어주기
    for(let el of edges) {
        matrix[el[0]][el[1]] = 1;
        matrix[el[1]][el[0]] = 1;
    }

    const dfs = (matrix, idx) => {
        visited[idx] = true;

        for (let i = 0; i < matrix.length; ++i) {
            if (matrix[idx][i] === 1 && !visited[i]) {
                dfs(matrix, i);
            }
        }
    }

    // 순회돌기
    let count = 0;
    let visited = new Array(matrix.length).fill(false);
    for(let i = 0; i < matrix.length; ++i) {
        if(!visited[i]) {
            dfs(matrix, i);
            count++;
        }
    }

    return count;
}

const result = connectedVertices([
	[0, 1],
	[2, 3],
	[4, 5],
]);
console.log(result); // 3