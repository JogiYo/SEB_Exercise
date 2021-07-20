function PresentationOrder(N, K) {
    let result = 0;
    let visited = [];
    // 해당 인덱스들이 1부터시작하기 때문에 N까지 포함
    for(let i = 0; i <= N; ++i) {
        visited.push(false);
    }

    // 순열이지만 해당하는 순서이기 때문에 순열을 모두 구할 필요가 없다.
    // K 배열을 순회하면서 카운트를 한다.
    for(let i = 0; i < K.length; ++i) {
        let idx = K[i];
        // 해당 숫자 방문완료
        visited[idx] = true;
        // 처음 인덱스일 경우를 생각한다.
        // 만약 2,1,3,4,5 라면 처음 발표자가 1일 때 올수 있는 경우는 4!
        // 3,1,2,4,5 라면 1일 때 4!, 2일 때도 4! => 2 * 4!
        // 이전 인덱스까지 잘라내고, 그중 방문하지 않은 인덱스를 걸러낸다. (3이라면 1, 2)
        let preCount = visited.slice(1, idx).filter((el) => el === false).length;
        // i는 0번째 인덱스부터 시작하기 때문에 (N - (i+1))!을 해주어야 한다.
        let facto = N - (i+1);
        for(let j = facto - 1; j > 0; --j) {
            facto = facto * j;
        }

        preCount = preCount * facto;
        result += preCount;
    }

    return result;
}

let output = PresentationOrder(5, [1, 3, 2, 4, 5])
console.log(output);