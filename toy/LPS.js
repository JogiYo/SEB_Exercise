const LPS = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let resultStr = '';
    
    for (let i = 1; i <= str.length / 2; ++i) {
      let prefix = str.slice(0, i);
      let suffix = str.slice(str.length - i);
      
      if (prefix === suffix) {
        resultStr = prefix;
      }
    };
    
    return resultStr.length;
  
    // const result = str.match(/(\w*).*\1/);
    // return result[1].length;
};

let output = LPS('abbbcc');
console.log(output); // --> 0

output = LPS('aaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(2)
// non-overlapping 조건이 없는 경우 정답은 4 입니다.

output = LPS('aaaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.