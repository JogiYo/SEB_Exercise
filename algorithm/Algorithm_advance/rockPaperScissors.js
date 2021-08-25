function rockPaperScissors (rounds) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = ['rock',  'paper', 'scissors'];
    let result = [];
    rounds = rounds || 3;

    const perm = (choice, rounds) => {
        if(rounds ===  0) {
            let new_arr = [...choice];
            result.push(new_arr);
            return;
        }

        for(let i = 0; i < arr.length; ++i) {
            choice.push(arr[i]);
            perm(choice, rounds - 1);
            choice.pop();
        }

        return;
    }
    perm([], rounds);
    return result;
};

let output = rockPaperScissors();

console.log(output);