const jobAllocation = function (jobs, workersNum) {
    const dfs = (workerIdx, jobIdx, w_left, memo) => {
        if (memo[workerIdx][jobIdx] !== 0) return memo[workerIdx][jobIdx];
    
        let worksum = 0;
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = jobIdx; i < jobs.length - w_left; i++) {
            worksum = worksum + jobs[i];
            // 가장 많이 일하는 사람의 작업량을 구한다.
            let max = Math.max(worksum, dfs(workerIdx + 1, i + 1, w_left - 1, memo));
            // 그 작업량이 최소화되는 분배에서 최대 작업량을 구한다.
            min = Math.min(min, max);
        }
        memo[workerIdx][jobIdx] = min;
        return min;
    };

    const memo = new Array(workersNum);
    for (let i = 0; i < workersNum; i++) {
        memo[i] = new Array(jobs.length).fill(0);
    }
    // 마지막 수리공의 작업량을 계산한다.
    let worksum = 0;
    for (let i = jobs.length - 1; i >= workersNum - 1; i--) {
        worksum = worksum + jobs[i];
        memo[workersNum - 1][i] = worksum;
    }
    // 인덱스가 0부터 시작이기 때문에 workersNum은 주어진 수의 -1을 해서 시작한다.
    return dfs(0, 0, workersNum - 1, memo);
};

let jobs = [1, 2, 3, 4, 5, 6, 7];
let workersNum = 3;
let output = jobAllocation(jobs, workersNum);
console.log(output); // --> 11 (1, 2, 3, 4 / 5, 6 / 7)

jobs = [10, 2, 3, 4, 16, 10, 10];
workersNum = 4;
output = jobAllocation(jobs, workersNum);
console.log(output); // --> 19 (10, 2, 3, 4 / 16 / 10 / 10