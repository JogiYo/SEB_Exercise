
const subsetSum = function (set, bound) {
    let max = 0;
    // 집합의 원소들로 만들 수 있는 합의 조합을 관리하는 배열
    // bound는 최대 300이므로, 배열의 크기를 301로 설정한다.
    // 300 + 1 로 적는 이유는 가독성과 배열 인덱스를 직관적으로 관리하기 위함
    // 원소들을 통해 sum을 만들 수 있는 경우, bound[sum]을 true로 설정한다.
    const cached = Array(300 + 1).fill(false);
    set.forEach((member) => {
        // 집합의 원소를 차례대로 검사
        // 이전 단계까지 검사한 원소들로 만들 수 있는 합의 조합은 cached에 저장되어 있다.
        // cached의 요소에 각각 member를 더한 값을 만들 수 있다.
        const reachables = [];
        // 이 중에서 bound를 넘어가는 값은 고려하지 않는다.
        // reachables로 따로 관리하는 이유는 중복 계산을 피하기 위함
        for (let wanted = 1; wanted <= bound - member; wanted++) {
            if (cached[wanted] === true) {
                const reached = wanted + member;
                reachables.push(reached);
                if (reached > max) max = reached;
            }
        }

        // bound 이하로 만들 수 있는 합의 조합을 cached에 추가한다.
        reachables.forEach((r) => (cached[r] = true));

        // 집합의 원소를 마지막에 cached에 추가하는 이유는 중복 계산을 방지하기 위함
        if (member <= bound) {
            cached[member] = true;
            if (member > max) max = member;
        }
    });

    return max;
}
// --------------------------------------------------------------
const subsetSum_use_combination = function (set, bound) {
    let visited = new Array(set.length);
    let max = 0;

    const dfs = (num, depth, idx) => {
        if(num > bound) return;

        if(depth === set.length) {
            if(num > max) max = num;
            return;
        }

        if(num > max) max = num;
        for(let i = idx + 1; i < visited.length; ++i) {
            if(!visited[i]){
                visited[i] = true;
                dfs(num + set[i], depth + 1, i);
                visited[i] = false;
            }
        }
    }

    for(let i = 0; i < set.length; ++i) {
        visited[i] = true;
        dfs(set[i], 1, i);
        visited[i] = false;
    }
    
    return max;
};

let output = subsetSum([1, 8, 3, 15], 10);
console.log(output); // --> 9 (= 1 + 8)

output = subsetSum([20, 80, 99, 27, 35], 100);
console.log(output); // --> 100 (= 20 + 80)

output = subsetSum([10, 20, 15, 25, 30], 5);
console.log(output); // --> 0