// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴
const largestProductOfThree = function (arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let visit = new Array(arr.length).fill(false);
    
    const dfs = (arr, idx, depth) => {
        // depth 3이면 리턴
        if(depth === 3) {
            let product = 1;
            for(let i = 0; i < visit.length; ++i) {
                if(visit[i]) product *= arr[i];
            }

            return product;
        }

        for(let i = idx; i < arr.length; ++i) {
            if(!visit[i]) {
                visit[i] = true;
                max = Math.max(max, dfs(arr, i+1, depth+1));
                visit[i] = false;
            }
        }

        return max;
    }

    dfs(arr, 0, 0);
    return max;
};

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output);

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); 