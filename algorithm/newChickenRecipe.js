function newChickenRecipe(stuffArr, choiceNum) {
    let newArr = [];
    // 0이 세 개 이상인 재료들은 걸러낸다
    for(let i = 0; i < stuffArr.length; ++i) {
        let el = String(stuffArr[i]).split('').filter(e => e === '0');
        if(el.length < 3) newArr.push(stuffArr[i]);
    }

    newArr.sort((a,b) => a - b);
    // []을 반환하는 경우
    if(newArr.length === 0 || newArr.length < choiceNum) return [];

    let result = [];
    let visited = new Array(newArr.length).fill(false);

    const perm = (recipe, depth) => {
        if(depth === 0) {
            result.push(recipe);
            return;
        }

        for(let i = 0; i < newArr.length; ++i) {
            if(!visited[i]) {
                visited[i] = true;
                perm(recipe.concat(newArr[i]), depth - 1);
                visited[i] = false;
            }
        }
    }

    perm([], choiceNum);
    return result;
}

const output1 = newChickenRecipe([1, 10, 1100, 1111], 2);
console.log(output1);
/*
  [
    [1, 10], [1, 1100], [1, 1111],
    [10, 1], [10, 1100], [10, 1111],
    [1100, 1], [1100, 10], [1100, 1111],
    [1111, 1], [1111, 10], [1111, 1100]
  ];
*/

const output2 = newChickenRecipe([10000, 10, 1], 3);
console.log(output2); // []