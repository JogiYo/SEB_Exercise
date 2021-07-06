// 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴
function firstReverse(str) {
    return str.split('').reverse().join('');
}

let output = firstReverse('codestates');
console.log(output); // "setatsedoc"

output = firstReverse('I love codestates');
console.log(output); // "setatsedoc evol I"