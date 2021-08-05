const balancedBrackets = function (str) {
    if(str.length === 0) return true;

    let stack = [];

    for(let i = 0; i  < str.length; ++i) {
        if(str[i] === '{' || str[i] === '[' || str[i] === '(') {
            stack.push(str[i]);
        }
        else {
            if(str[i] === ')') {
                if(stack[stack.length-1] === '(') stack.pop();
                else return false;
            }
            else if(str[i] === '}') {
                if(stack[stack.length-1] === '{') stack.pop();
                else return false;
            }
            else if(str[i] === ']') {
                if(stack[stack.length-1] === '[') stack.pop();
                else return false;
            }
        }
    }

    if(stack.length === 0) return true;
    return false;
};

let output = balancedBrackets('(');
console.log(output); // // -> false

output = balancedBrackets('()');
console.log(output); // --> true
  