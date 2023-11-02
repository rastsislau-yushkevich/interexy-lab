//Дерево и его построение

class BinaryTreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }

  get height() {
    let leftHeight = this.left ? this.left.height + 1 : 0;
    let rightHeight = this.right ? this.right.height + 1 : 0;
    return Math.max(leftHeight, rightHeight);
  }

  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }
    if (node) {
      this.left = node;
      this.left.parent = this;
    }
  }

  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }
    if (node) {
      this.right = node;
      this.right.parent = this;
    }
  }
}

let tree = new BinaryTreeNode('A');

let bNode = new BinaryTreeNode('B');
tree.setLeft(bNode);

let cNode = new BinaryTreeNode('C');
tree.setRight(cNode);

let dNode = new BinaryTreeNode('D');
let eNode = new BinaryTreeNode('E');
let fNode = new BinaryTreeNode('F');

cNode.setLeft(dNode);
cNode.setRight(eNode);

//Обходы дерева

//1. В глубину
const traverseDFRecursive = (node, callback) => {
    callback(node);

    if(node.left) {
        traverseDFRecursive(node.left, callback)
    }
    if(node.right) {
        traverseDFRecursive(node.right, callback)
    }
}

const traverseDF = (root, callback) => {
    traverseDFRecursive(root, callback)
}

console.log('В глубину\n')
traverseDF(tree, (node) => console.log(node.value));

//2. В ширину

class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

const traverseBF = (root, callback) => {
  let newQueue = new Queue();
  newQueue.enqueue(root);

  while (!newQueue.isEmpty()) {
    let currentNode = newQueue.dequeue();
    callback(currentNode);

    if (currentNode.left) {
      newQueue.enqueue(currentNode.left);
    }
    if (currentNode.right) {
      newQueue.enqueue(currentNode.right);
    }
  }
};

console.log('\nВ ширину\n')
traverseBF(tree, (node) => console.log(node.value));
