function missHouseMeal(sideDishes) {
    let result = [];
    sideDishes.sort();
    
    const findPowerSet = (curArr, curIdx) => {
        if(curIdx === sideDishes.length) {
            result.push(curArr);
            return;
        }

        findPowerSet([...curArr, sideDishes[curIdx]], curIdx + 1);
        findPowerSet([...curArr], curIdx + 1)
    }
    // const dfs = (idx, depth, visit, target) => {
    //     if(depth === target) {
    //         let arr = []
    //         for(let i = 0; i < visit.length; ++i) {
    //             if(visit[i]) arr.push(sideDishes[i]);
    //         }

    //         result.push([...arr]);
    //         return;
    //     }

    //     for(let i = idx; i < visit.length; ++i) {
    //         if(!visit[i]) {
    //             visit[i] = true;
    //             dfs(i+1, depth+1, visit, target);
    //             visit[i]  = false;
    //         }
    //     }

    //     return;
    // }

    // for(let i = 0; i <= sideDishes.length; ++i) {
    //     let visit = new Array(sideDishes.length).fill(false);
    //     dfs(0,0, visit, i);
    // }
    findPowerSet([], 0);
    result.sort();
    return result;
}

let output = missHouseMeal(["eggroll", "kimchi", "fishSoup"]);
console.log(output);
