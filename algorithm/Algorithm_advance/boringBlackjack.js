function boringBlackjack(cards) {
    let visited = new Array(cards.length).fill(false);
    let result = 0;

    const comb =  (start, n, r) => {
        if(r === 0) {
            let sum = 0;
            for(let i = 0; i < visited.length; ++i) {
                if(visited[i]) sum += cards[i];
            }

            if(isPrime(sum)) result++;
            return;
        }

        for(let i = start; i < n; ++i) {
            visited[i] = true;
            comb(i+1, n, r-1);
            visited[i] = false;
        }
    }

    const isPrime = (num) => {
        if(num === 1 || num % 2 === 0) return false

        for(let i = 3; i <= Math.sqrt(num); i += 2) {
          if(num % i === 0) {
            return false;
          }
        }

        return true;
    }

    comb(0, cards.length, 3);
    return result;
}

let output = boringBlackjack([1, 2, 3, 4]);
console.log(output); // 1

output = boringBlackjack([2, 3, 4, 8, 13]);
console.log(output); // 3