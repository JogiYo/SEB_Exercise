const subSet = function (base, sample) {
    base.sort(function(a,b){return a - b});
    sample.sort(function(a,b){return a - b});
      
    let idx = 0;
    for(let i = 0; i < sample.length; ++i) {
      let flag = false;
      for(let j = idx; j < base.length; ++j) {
        if(sample[i] === base[j]) {
          idx = j+1;
          flag = true;
          break;
        }
      }
  
      if(!flag) return false;
    }
  
    return true;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = subSet(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = subSet(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = subSet(base, sample);
console.log(output); // --> false