// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴
function convertListToObject(arr) {
    // 빈 배열일 경우, 빈 객체를 리턴
    if(!arr.length) {
        return {};
    }

    let result = {};
    for(let key_value of arr) {
        if(key_value.length !== 0 && result[key_value[0]] === undefined) {
            result[key_value[0]] = key_value[1];
        }
    }

    return result;
}

const arr = [
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', '1964'],
    ['make', 'Bill'],
];
let output = convertListToObject(arr);

console.log(output) // -->
// {
//   make : 'Ford'
//   model : 'Mustang',
//   year : '1964'
// }