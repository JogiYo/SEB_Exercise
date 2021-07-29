const insertionSort = function (arr, standard = (el) => el) {
    for(let i = 1; i < arr.length; ++i) {
        let key = arr[i];
        let j = i-1;
        while(j >= 0 && standard(arr[j]) > standard(key)) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] =key;
    }

    return arr;
};

let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]