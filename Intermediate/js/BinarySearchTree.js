class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);
    
    const buildBalancedTree = (arr, start, end) => {
      if (start > end) return null;
      const mid = Math.floor((start + end) / 2);
      const node = new Node(arr[mid]);
      node.left = buildBalancedTree(arr, start, mid - 1);
      node.right = buildBalancedTree(arr, mid + 1, end);
      return node;
    };

    return buildBalancedTree(uniqueSortedArray, 0, uniqueSortedArray.length - 1);
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(root, value) {
    if (root === null) return new Node(value);
    if (value < root.data) root.left = this._insertRec(root.left, value);
    else if (value > root.data) root.right = this._insertRec(root.right, value);
    return root;
  }

  deleteItem(value) {
    this.root = this._deleteRec(this.root, value);
  }

  _deleteRec(root, value) {
    if (root === null) return root;

    if (value < root.data) {
      root.left = this._deleteRec(root.left, value);
    } else if (value > root.data) {
      root.right = this._deleteRec(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      root.data = this._minValue(root.right);
      root.right = this._deleteRec(root.right, root.data);
    }

    return root;
  }

  _minValue(node) {
    let minv = node.data;
    while (node.left !== null) {
      minv = node.left.data;
      node = node.left;
    }
    return minv;
    }
    
    find(value) {
    let current = this.root;
    while (current !== null) {
      if (value === current.data) return current;
      if (value < current.data) current = current.left;
      else current = current.right;
    }
    return null;
  }

  levelOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      callback(node);
      traverse(node.right);
    };
    traverse(this.root);
  }

  preOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    const traverse = (node) => {
      if (node === null) return;
      callback(node);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
  }

  postOrder(callback) {
    if (!callback) throw new Error("Callback is required");
    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      callback(node);
    };
    traverse(this.root);
  }

  height(node) {
    if (node === null) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node) {
    let depth = 0;
    let current = this.root;
    while (current !== null) {
      if (node.data === current.data) return depth;
      if (node.data < current.data) current = current.left;
      else current = current.right;
      depth++;
    }
    return -1;
  }

  isBalanced() {
    const checkBalance = (node) => {
      if (node === null) return true;
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
      if (Math.abs(leftHeight - rightHeight) > 1) return false;
      return checkBalance(node.left) && checkBalance(node.right);
    };
    return checkBalance(this.root);
  }

  rebalance() {
    const values = [];
    this.inOrder((node) => values.push(node.data));
    this.root = this.buildTree(values);
  }
}
function generateRandomArray(size, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}
const randomArray = generateRandomArray(20, 100);
const tree = new Tree(randomArray);

console.log(tree.isBalanced());
const largeNumbers = [105, 110, 115, 120, 125];
largeNumbers.forEach(num => tree.insert(num));
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
