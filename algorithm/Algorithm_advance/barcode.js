function barcode(len) {
    const isSatisfy = (s) => {
        let loop = Math.floor(s.length/2);
        let start = s.length-1;
        let end = s.length;

        for(let i = 1; i <= loop; ++i) {
            if(s.slice(start - i, end - i) === s.slice(start, end)) {
                return false;
            }
            start -= 1;
        }
        return true;
    }

    const dfs = (str, depth) => {
        if(depth === len) {
            return str;
        }

        for(let i = 1; i <= 3; ++i) {
            let temp = str + i;
            if(isSatisfy(temp)) {
                let append = dfs(temp, depth+1);
                if(append !== null) return append;
            }
        }

        return null;
    }

    return dfs('1', 1);
}