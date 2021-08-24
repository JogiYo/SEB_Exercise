function radixSort(arr) {
    // https://rninche01.tistory.com/entry/%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-05-%EA%B3%84%EC%88%98-%EB%B0%8F-%EA%B8%B0%EC%88%98-%EC%A0%95%EB%A0%ACCounting-Sort-Radix-Sort
    // https://gaemi606.tistory.com/entry/%EA%B8%B0%EC%88%98-%EC%A0%95%EB%A0%ACRadix-sort
    const getMax = (arr) => {
        return Math.max(...arr);
    }

    const countingSort = (arr, n, exp) => {
        let output = new Array(n);
        let count = new Array(10).fill(0);
        
        // 각 수마다 count 개수 증가
        for(let value of arr) {
            count[parseInt(value/exp) % 10]++;
        }

        // 누적합
        for(let i = 1; i < 10; ++i) {
            count[i] += count[i-1];
        }

        // 정렬
        for(let i = n - 1; i >= 0; --i) {
            output[count[parseInt(arr[i]/exp) % 10] - 1] = arr[i];
            count[parseInt(arr[i]/exp) % 10]--;
        }

        // 배열 복사
        for(let i = 0; i < n; ++i) {
            arr[i] = output[i];
        }
    }

    let left = [];
    let right = [];

    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] >= 0) right.push(arr[i]);
        else left.push(arr[i] * -1);
    }

    let left_max = getMax(left);
    let right_max = getMax(right);

    for(let exp = 1; parseInt(left_max/exp) > 0; exp *= 10) {
        countingSort(left, left.length, exp);
    }

    for(let exp = 1; parseInt(right_max/exp) > 0; exp *= 10) {
        countingSort(right, right.length, exp);
    }
    
    return left.reverse().map(el => el*-1).concat(right);
}

let output = radixSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]