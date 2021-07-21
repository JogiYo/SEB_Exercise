const bubbleSort = function (arr) {
    let temp = 0;
    for(let i = 0; i < arr.length - 1; ++i) {
        let isChange = false;
        for(let j = 1; j < arr.length - i; ++j) {
            if(arr[j] < arr[j-1]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                isChange = true;
            }
        }
        // 스왑이 이루어지지 않았다면 정렬된 상태이므로 바로 반복문 중단
        if(!isChange) break;
    }

    return arr;
};

let output = bubbleSort([2, 1, 3]);
console.log(output); // --> [1, 2, 3]