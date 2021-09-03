const rangeMinimum = function (arr, ranges) {
    const init = (arr, start, end, idx) =>  {
        if(start === end) {
            tree[idx] = arr[start];
            return arr[start];
        }

        let mid = parseInt((start +  end) / 2);
        tree[idx] = Math.min(init(arr, start, mid, 2*idx + 1), init(arr, mid+1, end, 2*idx + 2));
        
        return tree[idx];
    }

    const find = (ts, te, rs,  re, idx) => {
        if(rs <=  ts  &&  te <= re) {
            return tree[idx];
        }

        if(te < rs || re < ts) {
            return Number.MAX_SAFE_INTEGER;
        }

        let mid =  parseInt((ts + te) / 2);
        return  Math.min(find(ts, mid, rs, re, 2*idx + 1), find(mid+1, te, rs, re, 2*idx + 2));
    }

    // 원래는 트리의 높이를 고려하여 배열의 크기를 정해준다.
    let height = Math.ceil(Math.log2(arr.length)) + 1;
    let S = Math.pow(2, height-1);
    // 트리의 노드 개수는 2^n-1개다.
    let tree = Array(S*2 - 1).fill(null);
    init(arr, 0, arr.length-1, 0);

    let result = [];
    for(let range of ranges) {
        result.push(find(0, arr.length-1, range[0], range[1], 0));
    }
    return result;
};

const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [
  [1, 4],
  [0, 3],
]);
console.log(mins); // --> [2, 1]