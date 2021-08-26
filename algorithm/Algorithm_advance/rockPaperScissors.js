function rockPaperScissors (rounds) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = ['rock',  'paper', 'scissors'];
    let result = [];
    rounds = rounds || 3;

    const perm = (choice, rounds) => {
        if(rounds ===  0) {
            result.push([...choice]);
            return;
        }

        for(let i = 0; i < arr.length; ++i) {
            perm([...choice, arr[i]], rounds - 1);
        }

        return;
    }
    perm([], rounds);
    return result;
};

let output = rockPaperScissors();

console.log(output);