// https://blockdmask.tistory.com/177
const quickSort = function (arr, standard = (el) => el) {
    const q_sort =  (arr, left, right) => {
        let pivot = standard(arr[left]);
        let start = left + 1;
        let end = right;

        while(start <= end) {
            while(standard(arr[start]) < pivot) start++;
            while(standard(arr[end]) > pivot) end--;

            if(start <= end) {
                let temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
            }
        }

        if(left < right) {
            let temp = arr[left];
            arr[left] = arr[end];
            arr[end] = temp;

            q_sort(arr, left, end - 1);
            q_sort(arr, end + 1, right);
        }

        return;
    }

    let left = standard(0);
    let right = standard(arr.length-1);
    return q_sort(arr, left, right);
};

let output = quickSort([4, 5, 1, 2, 11, 8, 3, 1, 2, 5 ]);
console.log(output); // --> [1, 3, 21]