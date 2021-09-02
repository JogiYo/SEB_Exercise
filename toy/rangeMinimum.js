// https://bactoria.github.io/2019/03/14/%EC%84%B8%EA%B7%B8%EB%A8%BC%ED%8A%B8-%ED%8A%B8%EB%A6%AC-(%EA%B5%AC%EA%B0%84%ED%95%A9,-%EA%B5%AC%EA%B0%84%EA%B3%B1,-%EC%B5%9C%EC%86%8C%EA%B0%92,-%EC%B5%9C%EB%8C%80%EA%B0%92)/
const rangeMinimum = function (arr, ranges) {
    // TODO: 여기에 코드를 작성합니다.
    const init = (arr, start, end) =>  {
        if(start === end) {
            return {value : arr[start]};
        }

        let mid = parseInt((start +  end) / 2);
        let left = init(arr, start, mid);
        let right = init(arr, mid + 1, end);

        return {
            value : Math.min(left.value, right.value),
            left,
            right
        }
    }

    const find = (ts, te, rs,  re, tree) => {
        if(rs <=  ts  &&  te <= re) {
            return tree.value;
        }

        if(te < rs || re < ts) {
            return Number.MAX_SAFE_INTEGER;
        }

        let mid =  parseInt((ts + te) / 2);
        return  Math.min(find(ts, mid, rs, rs, tree.left), find(mid+1, te, rs, re, tree.right));
    }

    const get = (arr, range) => {
        let [rs, re] = range;
        let end = arr.length - 1;
        let tree = init(arr, 0, end);
        let min = find(0, end, rs, re, tree);
        return min;
    }

    let result = [];
    for(let range of ranges) {
        result.push(get(arr, range));
    }
    return result;
};

const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [
  [1, 4],
  [0, 3],
]);
console.log(mins); // --> [2, 1]