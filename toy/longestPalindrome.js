let longestPalindrome = function (str) {
    // 길이가 1 이하의 문자열일 때
    if(str.length <= 1) return str.length;

    let ch = str.split("");
    // 가장 긴 길이부터 확인을 한다.
    for(let len = str.length; len > 1; --len) {
        // 첫 인덱스부터 길이로 확인을 한다.
        for(let start = 0; start + len <= str.length; ++start) {
            let flag = true;
            // 스트링을 반으로 나눈 후, character들이 일치하는지 확인한다.
            let half = parseInt(len/2);
            for(let i = 0; i <= half; ++i) {
                if(ch[start + i] !== ch[start + len -i -1]) {
                    flag = false;
                    break;
                }
            }

            if(flag) {
                return len;
            }
        }
    }

    // 가장 작은 길이는 무조건 1이다.
    return 1;
};

let str = 'My dad is a racecar athlete';
let result = longestPalindrome(str);
console.log(result); // --> 11 ('a racecar a')

str = ' dad ';
result = longestPalindrome(str);
console.log(result); // --> 5 (' dad ')