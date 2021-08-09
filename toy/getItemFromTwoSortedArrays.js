const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    let merged_arr = [];

    while(arr1.length !== 0 || arr2.length !== 0)  {
        if(arr1.length !== 0 && arr2.length !== 0) {
            if(arr1[0] < arr2[0]) {
                merged_arr.push(arr1.shift());
            }
            else {
                merged_arr.push(arr2.shift());
            }
        }

        else if(arr1.length !== 0) {
            merged_arr.push(arr1.shift());
        }
        else if(arr2.length !== 0) {
            merged_arr.push(arr2.shift());
        }
    }

    return merged_arr[k-1];
};

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3