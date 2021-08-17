const inequalityNumber = function (signs) {
    const dfs = (idx, arr, visit, result) => {
        if(idx === sign_arr.length) {
            return parseInt(result.join(''));
        }

        for(let i = 0; i < arr.length; ++i) {
            let num = arr[i];
            // 두 번째 숫자부터 조건에 부합하는지 확인한다.
            // 조건에 부합하지 않으면 다른 숫자로 탐색한다.
            if(idx >= 0) {
                if(sign_arr[idx] === '<' && (result[result.length - 1] > num)) continue;
                if(sign_arr[idx] === '>' && (result[result.length - 1] < num)) continue;
            }

            if(!visit[i]) {
                visit[i] = true;
                let found = dfs(idx + 1, arr, visit, [...result, num]);
                if(found != null) return found;
                visit[i] = false;
            }
        }

        return null;
    };
    
    let max_arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    let min_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let max_visit = new Array(10).fill(false);
    let min_visit = new Array(10).fill(false);
    let sign_arr = signs.split(" ");

    let max = dfs(-1, max_arr, max_visit, []);
    let min = dfs(-1, min_arr, min_visit, []);

    return max - min;
};

let output = inequalityNumber('<');
console.log(output); // --> 88 (89 - 01)

output = inequalityNumber('< >');
console.log(output); // --> 876 (897 - 021)

output = inequalityNumber('> < >');
console.log(output); // --> 8,754 (9,786 - 1,032)