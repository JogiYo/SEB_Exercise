function getLongestWord(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.split(' ');
    return arr.reduce((a,b) => a.length >= b.length ? a : b);
}

console.log(getLongestWord('I love league of legend'));