const largestRectangularArea = function (histogram) {
    const createMinIdxTree = (arr, start, end) => {
        if(start === end)  return {
            idx: start,
            val: arr[start]
        };

        let mid = parseInt((start + end) / 2);
        let left = createMinIdxTree(arr, start, mid);
        let right = createMinIdxTree(arr, mid+1, end);

        return {
            val: Math.min(left.val, right.val),
            idx: left.val < right.val ? left.idx : right.idx,
            left,
            right
        };
    };

    let tree = createMinIdxTree(histogram, 0, histogram.length-1);

    const getMinIdx = (ts, te, rs,  re, tree) => {
        if(rs <= ts && te <= re) return tree.idx;
        if(te < rs || re < ts) return rs;

        let mid = parseInt((ts + te) / 2);
        let left = getMinIdx(ts, mid, rs, re, tree.left);
        let right = getMinIdx(mid+1, te, rs, re, tree.right);
        return histogram[left] < histogram[right] ? left : right;
    };
    // 높이를 기준으로 구간을 나누어 면적을 구한다.
    const getRangeArea = (start, end) => {
        if(start > end) return 0;
        // 현재 구간에서 가장 작은 막대를 찾는다.
        // 가장 작은 막대이므로 구간의 길이 * 높이만큼의 직사각형을 만들 수 있다. (첫번째 후보)
        let minIdx = getMinIdx(0, histogram.length-1, start, end, tree);

        // 가장 작은 막대를 기준으로 왼쪽, 오른쪽 부분에 존재하는 모든 막대의 높이가 더 크다.
        // 재귀적으로 왼쪽 부분과 오른쪽 부분,
        // 즉 해당 구간에서 가장 작은 막대를 제외해서 만들 수 있는 가장 큰 직사각형의 넓이를 구한다.
        return Math.max((end - start + 1) * histogram[minIdx],
        getRangeArea(start, minIdx - 1),
        getRangeArea(minIdx+1, end));
    };

    return getRangeArea(0, histogram.length-1);
};

let histogram = [2, 1, 4, 5, 1, 3, 3];
let output = largestRectangularArea(histogram);
console.log(output); // --> 8

histogram = [6, 2, 5, 4, 5, 1, 6];
output = largestRectangularArea(histogram);
console.log(output); // --> 12