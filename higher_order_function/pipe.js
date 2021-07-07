// 함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴
function pipe() {
    let args = [...arguments];
    return function (num) {
      arg = num;
      for(let i = 0; i < args.length; ++i) {
        arg = args[i](arg);
      }
  
      return arg;   
    };
  }