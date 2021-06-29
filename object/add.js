// 키를 입력받아 해당하는 값을 true로 설정
function addProperty(obj, property) {
    obj[property] = true;
}

let steve = {};
addProperty(steve, 'isMale');
console.log(steve.isMale); // --> true

addProperty(steve, 'isProgrammer');
console.log(steve.isProgrammer); // --> true
//--------------------------------------------------------------
// 객체와 키, 값을 입력받아 키에 값을 할당
function addPropertyAndValue(obj, property, value) {
    obj[property] = value;
}

let jessica = {};
addPropertyAndValue(jessica, 'job', 'Programmer');
console.log(jessica.job); // --> 'Programmer'
//--------------------------------------------------------------
// 두 개의 객체와 키를 입력받아 첫번째 객체의 키에 두번째 객체를 할당
function addObjectProperty(obj1, property, obj2) {
    // 여기에 코드를 작성합니다
    obj1[property] = obj2;
}
const person1 = {
    name: 'Joe',
    role: 'Team Member',
};
  
const person2 = {
    name: 'Steve',
    role: 'CEO',
};
  
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager);