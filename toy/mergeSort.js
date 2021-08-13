const mergeSort = function (arr) {

    const m_sort = function (arr, idx_count) {
        if(idx_count < 2) return;

        let mid = Math.floor(idx_count / 2);

        let left_arr = [];
        let right_arr = [];

        for(let i = 0; i < mid; ++i) left_arr.push(arr[i]);
        for(let j = mid; j < idx_count; ++j) right_arr.push(arr[j]);

        m_sort(left_arr, mid);
        m_sort(right_arr, idx_count - mid);

        merge(arr, left_arr, mid, right_arr, idx_count - mid);
    }

    const merge = function (arr, left_arr, left_count, right_arr, right_count) {
        let i = 0;
        let j = 0;
        let k = 0;

        while(i < left_count && j < right_count) {
            if(left_arr[i] < right_arr[j]) arr[k++] = left_arr[i++];
            else arr[k++]  = right_arr[j++]; 
        }

        while(i < left_count) {
            arr[k++] = left_arr[i++];
        }

        while(j < right_count) {
            arr[k++] = right_arr[j++];
        } 
    }

    m_sort(arr, arr.length);
    return arr;
};

let output = mergeSort([4, 1, 21, 2, 5, 11, 6, 23, 14, 100, 50]);
console.log(output);