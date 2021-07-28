function powerSet(str) {
    let result = [];
    let alph = [];
    for(let i = 0; i < str.length; ++i) {
        if(!alph.includes(str[i])) alph.push(str[i]); 
    }
    alph.sort();

    const dfs = (idx, depth, visit, target) => {
        if(depth === target) {
            let str = '';
            for(let i = 0; i < visit.length; ++i) {
                if(visit[i]) str += alph[i];
            }
            result.push(str);
            return;
        }

        for(let i = idx; i < visit.length; ++i) {
            if(!visit[i]) {
                visit[i] = true;
                dfs(i+1, depth+1, visit, target);
                visit[i]  = false;
            }
        }

        return;
    }

    for(let i = 0; i <= alph.length; ++i) {
        let visit = new Array(alph.length).fill(false);
        dfs(0,0, visit, i);
    }

    result.sort();
    return result;
}

let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2);