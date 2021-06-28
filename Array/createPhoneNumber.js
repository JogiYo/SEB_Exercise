function createPhoneNumber(arr) {
    // 길이가 8일 경우
    if(arr.length === 8) {
        return '(010)' + arr.slice(0, 4).join('') + '-' + arr.slice(4).join(''); 
    }
    // 길이가 11일 경우
    else {
        return '(' + arr.slice(0, 3).join('') + ')' + arr.slice(3, 7).join('') + '-' + arr.slice(7).join('');
    }
}

let output = createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
console.log(output); // --> '(010)1234-5678'

output = createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]);
console.log(output); // --> '(010)8765-4321'

output = createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]);
console.log(output); // --> '(011)4321-8765'