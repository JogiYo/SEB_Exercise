const primePassword = (curPwd, newPwd) => {
    const isPrime = (num) => {
        if (num % 2 === 0) return false;
        for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
    };

    if(curPwd === newPwd) return 0;

    let queue = [];
    let visit = new Array(10000).fill(false);

    queue.push([curPwd, 0]);
    visit[curPwd] = true;

    while(queue.length !== 0) {
        let [pwd, count] = queue.shift();
        for(let i = 0; i < 4; ++i) {
            let digits = pwd.toString().split('').map((el) => Number(el));
            for(let j = 0; j <= 9; ++j) {
                if(j !== digits[i]) {
                    digits[i] = j;
                    let tempPwd = Number(digits.join(''));

                    if(tempPwd === newPwd) return count + 1;

                    if(tempPwd >= 1000 && isPrime(tempPwd) && (!visit[tempPwd])) {
                        queue.push([tempPwd, count + 1]);
                        visit[tempPwd] = true;
                    }
                }
            }
        }
    }

    return -1;
}

let output = primePassword(1033, 1033);
console.log(output); // --> 0

output = primePassword(3733, 8779);
console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)