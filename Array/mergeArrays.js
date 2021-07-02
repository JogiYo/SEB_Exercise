function mergeArrays_concat(arr1, arr2) {
    return arr1.concat(arr2);
}

function mergeArrays_spread_operator(arr1, arr2) {
    return [...arr1, ...arr2];
}

function mergeArrays_SO_and_push(arr1, arr2) {
    arr1.push(...arr2);
    return arr1;
}

str_arr1 = ['star', 'apple', 'banana'];
str_arr2 = ['monkey', 'code'];

console.log(mergeArrays_concat(str_arr1, str_arr2));
console.log(mergeArrays_spread_operator(str_arr1, str_arr2));
console.log(mergeArrays_SO_and_push(str_arr1, str_arr2));