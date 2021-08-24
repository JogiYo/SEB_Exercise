function ocean(target, type) {
    let result = new Array(100001).fill(0);
    
    result[0] = 1;
    for(let i of type) {
      for(let j = i; j <= target; ++j) {
        result[j] += result[j-i];
      }
    }
    
    return result[target];
}