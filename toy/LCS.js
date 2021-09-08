const LCS = function (str1, str2) {
    let str1_arr = ('0' + str1).split('');
    let str2_arr = ('0' + str2).split('');
    let lcs = new Array(str2_arr.length);

    for(let i = 0;  i < lcs.length; ++i) {
        lcs[i] = new Array(str1_arr.length).fill(0);
    }

    for(let i = 1; i < str2_arr.length; ++i) {
        for(let j = 1; j < str1_arr.length; ++j) {
            if(str1_arr[j] === str2_arr[i]) lcs[i][j] = lcs[i-1][j-1] + 1;
            else lcs[i][j] = Math.max(lcs[i-1][j], lcs[i][j-1]);
        }
    }

    return lcs[str2_arr.length-1][str1_arr.length-1];
};

let output = LCS('abcd', 'aceb');
console.log(output); // --> 2 ('ab' or 'ac')

output = LCS('acaykp', 'capcak');
console.log(output); // --> 4 ('acak')