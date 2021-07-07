// 학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴
// 남학생들의 정보는 리턴하는 배열에서 제외
// 'grades' 속성값은 평균값(number 타입)으로 바꾼다.
function studentReports(students) {
    // 성별에 따른 학생 분류
    let f_stu = students.filter(el => el['gender'] === 'female');
  
    return f_stu.map(function(el) {
      el['grades'] = el['grades'].reduce((sum, cur) => sum + cur, 0) / el['grades'].length;
  
      return el; 
    });
}

let studentList = [
    {
      name: 'Anna',
      gender: 'female',
      grades: [4.5, 3.5, 4],
    },
    {
      name: 'Dennis',
      gender: 'male',
      country: 'Germany',
      grades: [5, 1.5, 4],
    },
    {
      name: 'Martha',
      gender: 'female',
      grades: [5, 4, 4, 3],
    },
    {
      name: 'Brock',
      gender: 'male',
      grades: [4, 3, 2],
    },
  ];
  
  let output = studentReports(studentList);
  
  console.log(output); /* -->
  [
    { name: 'Anna', gender: 'female', grades: 4 },
    { name: 'Martha', gender: 'female', grades: 4 },
  ]; */