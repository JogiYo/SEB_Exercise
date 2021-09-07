const LIS = function (arr) {
    //TODO: 여기에 코드를 작성합니다.
    let lis = [];
    let trace = [];
    let lisCnt = 0;
    // 이분탐색을 이용한 nlogn 시간복잡도
    for(let i = 0; i < arr.length; ++i) {
        if(i == 0 || arr[i] > lis[lisCnt-1]) {
            trace[arr[i]] = lisCnt;
            lis[lisCnt++] = arr[i];
        } else {
            let start = 0 
            let end = lisCnt;
            let idx = lisCnt;
            while(start<end) {
                let mid = parseInt((start+end)/2);
                if(lis[mid] >= arr[i]) {
                    idx = Math.min(idx, mid);
                    end = mid;
                } else{
                start = mid+1;
                }
            }
            lis[idx] = arr[i];
            trace[arr[i]] = idx;
        }
    }
    // 가장 긴 부분수열 구하기
    let cur = lisCnt-1;
    for(let i=arr.length-1; i>=0; i--) {
        if(trace[arr[i]] === cur) {
            lis[cur] = arr[i];
            cur--;
        }
    }

    return lisCnt;
};

const LIS_memo = function (arr) {
    const memo = Array(arr.length).fill(-1);
    memo[memo.length-1] = 1;

    const calcLIS = (idx) => {
        if(memo[idx] !== -1) return memo[idx];

        let max = 1;
        for(let i = idx + 1; i < arr.length; ++i) {
            const len = calcLIS(i);
            if(arr[idx] < arr[i]) {
                max = Math.max(max, len + 1);
            }
        }
        memo[idx] =  max;
        return memo[idx];
    }

    calcLIS(0);
    return Math.max(...memo);
}

const LIS_dp = function (arr) {
    let n = arr.length;
    let lis = Array(n).fill(1);

    for(let i = 1; i < n; ++i) {
        for(let j = 0; j < i; ++j) {
            if(arr[i]  > arr[j] && lis[i] < lis[j] + 1)  {
                lis[i] = lis[j] + 1;
            }
        }
    }

    return Math.max(...lis);
}

let output = LIS([3, 2]);
console.log(output); // --> 1 (3 or 2)

output = LIS([3, 10, 2, 1, 20]);
console.log("BS : " + output); // --> 3 (3, 10, 20)

output = LIS_memo([3, 10, 2, 1, 20]);
console.log("memo : " + output);

output = LIS_dp([3, 10, 2, 1, 20]);
console.log("DP : " + output);