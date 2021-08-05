const quickSort = function (arr, standard = (el) => el) {
    const swap = function(arr, i, j) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    
    const partition = function(arr, left, right) {
        let mid = Math.floor((left+right) / 2);
        swap(arr, left, mid);

        let pivot_origin = arr[left];
        let pivot = standard(arr[left]);
        let start = left;
        let end = right;

        while(start < end) {
            while(standard(arr[end]) > pivot) end--;
            while(start < end && standard(arr[start]) <= pivot) start++;
            
            swap(arr, start, end);
        }
        arr[left] = arr[start];
        arr[start] = pivot_origin;

        return start;
    }

        const q_sort =  (arr, left, right) => {
        if(left >= right) return;

        let i = partition(arr, left, right);
        q_sort(arr, left, i-1);
        q_sort(arr, i+1, right);
    }

    let left = 0
    let right = arr.length-1;
    q_sort(arr, left, right);
    return arr;
};

// reference code
function quickSort_ref(arr, transform = (item) => item) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (transform(arr[i]) < transform(pivot)) left.push(arr[i]);
      else right.push(arr[i]);
    }
  
    const lSorted = quickSort_ref(left, transform);
    const rSorted = quickSort_ref(right, transform);
    return [...lSorted, pivot, ...rSorted];
}

let output = quickSort([4, 5, 1, 2, 10, 8, 3, 7, 6, 9]);
console.log(output);
output = quickSort_ref([4, 5, 1, 2, 10, 8, 3, 7, 6, 9]);
console.log(output);