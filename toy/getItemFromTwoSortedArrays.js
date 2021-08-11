const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    while(k > 1) {
        let left_idx = 0;
        let right_idx = 0;

        let count = Math.floor(k/2);
        if(count < arr1.length) left_idx = count - 1;
        if(count < arr2.length) right_idx = count - 1;

        if(arr1.length === 0) {
            return arr2[k-1];
        }
        if(arr2.length === 0) {
            return arr1[k-1];
        }

        if(arr1[left_idx] < arr2[right_idx]) {
            if(count > arr1.length) {
                k -= arr1.length; 
            }
            else k -= count;

            arr1 = arr1.slice(left_idx + 1);
        }
        else {
            if(count > arr2.length) {
                k -= arr2.length; 
            }
            else k -= count;
            
            arr2 = arr2.slice(right_idx + 1);
        }
    }

    return Math.min(arr1[0], arr2[0]);
};

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3

// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//     let left_idx = 0;
//     let right_idx = 0;

//     while(k > 0) {
//         let count = Math.ceil(k/2);
//         let left_count = count;
//         let right_count = count;

//         if(left_idx === arr1.length) {
//             right_idx += k;
//             break;
//         }

//         if(right_idx === arr2.length) {
//             left_idx += k;
//             break;
//         }

//         if(left_count > arr1.length - left_idx) left_count = arr1.length - left_idx;
//         if(right_count > arr2.length - right_idx)  right_count = arr2.length - right_idx;

//         if(arr1[left_idx + (left_count - 1)] < arr2[right_idx + (right_count - 1)]) {
//             left_idx += left_count;
//             k -= left_count;
//         }
//         else {
//             right_idx += right_count;
//             k -= right_count;
//         }
//     }

//     let left = arr1[left_idx - 1] || -1;
//     let right = arr2[right_idx - 1] || -1;

//     return Math.max(left, right);
// };