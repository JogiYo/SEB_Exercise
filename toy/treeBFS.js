let bfs = function (node) {
    let result = [];
    let queue =  [];
    queue.push(node);

    while(queue.length !== 0) {
        let temp = queue.shift();
        result.push(temp.value);

        for(let i = 0; i < temp.children.length; ++i) {
            queue.push(temp.children[i]);
        }
    }

    return result;
};

let Node = function (value) {
    this.value = value;
    this.children = [];
};

Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]