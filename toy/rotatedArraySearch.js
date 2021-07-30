const rotatedArraySearch = function (rotated, target) {
    let left = 0;
    let right = rotated.length - 1;
    let mid;

    while(left <= right) {
        mid = parseInt((left + right)/2);

        if(rotated[mid] === target) return mid;

        else if(rotated[mid] > rotated[left]) {
            if(target >= rotated[left] && target < rotated[mid]) {
                right = mid - 1;
            }
            else left = mid + 1;
        }
        else {
            if(target > rotated[mid] && target <= rotated[right]) {
                left = mid + 1;
            }
            else right = mid - 1;
        }
    }

    return -1;
};

let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1