// 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴
// 배열 안의 요소로 배열이 올 수 있다.
function unpackGiftbox(giftBox, wish) {
    if(giftBox.length === 0 || wish.length === 0) return false;
  
    for(let el of giftBox) {
      let flag = false;
      if(Array.isArray(el)) {
        flag = unpackGiftbox(el, wish);
      }
      if(flag || el === wish) return true;
    }
  
    return false;
}

const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true