function findMatryoshka(matryoshka, size) {
    if(matryoshka.size === size) return true;
    else if(matryoshka.matryoshka && matryoshka.size > size) {
        return findMatryoshka(matryoshka.matryoshka, size);
    } 

    return false;
}

const matryoshka = {
    size: 10,
    matryoshka: {
      size: 9,
      matryoshka: null,
    },
  };
  
let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true
  
output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false