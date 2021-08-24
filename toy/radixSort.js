function radixSort(arr) {
    // https://rninche01.tistory.com/entry/%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-05-%EA%B3%84%EC%88%98-%EB%B0%8F-%EA%B8%B0%EC%88%98-%EC%A0%95%EB%A0%ACCounting-Sort-Radix-Sort
    const getMax = (arr) => {
        return Math.max(...arr);
    }

    const getMin = (arr) => {
        return Math.min(...arr);
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

        for(let i = n - 1; i >= 0; --i) {
            output[count[parseInt(arr[i]/exp) % 10] - 1] = arr[i];
            count[parseInt(arr[i]/exp) % 10]--;
        }

        for(let i = 0; i < n; ++i) {
            arr[i] = output[i];
        }
    }

    let max = getMax(arr);
    let min = getMin(arr);

    if(min < 0) {
        for(let i = 0; i < arr.length; ++i) {
            arr[i] -= min;
        }
    }
    
    for(let exp = 1; parseInt(max/exp) > 0; exp *= 10) {
        countingSort(arr, arr.length, exp);
    }

    if(min < 0) {
        arr[i] += min;
    }

    return arr;
}

let output = radixSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]