function getType(anything) {
    // TODO: 여기에 코드를 작성합니다.
    // 요소가 array라면 array를 리턴한다.
    if(Array.isArray(anything)) {
      return 'array';
    }
    // null이라면 null을 리턴한다.
    else if(anything === null) {
      return 'null';
    }
    return typeof(anything);
  }

  console.log(getType('hi'));
  console.log(getType(1));
  console.log(getType([1,2,3,4]));
  console.log(getType(null));