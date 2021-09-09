const uglyNumbers = function (n) {
    let arr = [1];
    let idx_2 = 0;
    let idx_3 = 0;
    let idx_5 = 0;
    
    for(let i = 1; i < n; ++i) {
        let num_2 = arr[idx_2]*2;
        let num_3 = arr[idx_3]*3;
        let num_5 = arr[idx_5]*5;
        let min_ugly = Math.min(num_2, num_3, num_5);
        // 중복값이 있으면 안되기 때문에 값이 겹치면 겹치는 인덱스 모두 값을 증가시킨다.
        if(num_2 === min_ugly) idx_2++;
        if(num_3 === min_ugly) idx_3++;
        if(num_5 === min_ugly) idx_5++;
        
        arr.push(min_ugly);
    }

    return arr[n-1];
};

let result = uglyNumbers(1);
console.log(result); // --> 1

result = uglyNumbers(13);
console.log(result); // --> 3