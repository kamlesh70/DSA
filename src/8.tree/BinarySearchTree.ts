import { Node } from "./BinaryTree";

class BinarySearchTree {
  root: Node | null;
  constructor() {
    this.root = null;
  }

  insert(value: any) {
    if (this.root == null) {
      const node = new Node(value);
      this.root = node;
      return;
    }
    this.insertNode(this.root, value);
  }

  private insertNode(node: Node | null, value: any) {
    if (node == null) {
      return new Node(value);
    }
    if (value > node.value) {
      const newNode = this.insertNode(node.right, value) as Node;
      node.right = newNode;
    } else {
      const newNode = this.insertNode(node.left, value) as Node;
      node.left = newNode;
    }
    return node;
  }

  search(value: any): Node | null {
    return this.searchValue(this.root, value);
  }

  private searchValue(node: Node | null, value: any): Node | null {
    if (node == null) return null;
    if (node.value == value) return node;
    if (value > node.value) {
      return this.searchValue(node.right, value);
    } else {
      return this.searchValue(node.left, value);
    }
  }

  print(node = this.root) {
    if (node == null) return;
    console.log(node.value);
    this.print(node.left);
    this.print(node.right);
  }

  height(node = this.root): number {
    if (node == null) return 0;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight + 1, rightHeight + 1);
  }

  unbalancedNode(node: Node | null): Node | null {
    if (node == null) return null;
    const leftNodeResult = this.unbalancedNode(node.left);
    const rightNodeResult = this.unbalancedNode(node.right);
    if (leftNodeResult || rightNodeResult) {
      return leftNodeResult || rightNodeResult;
    }
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return node;
    }
    return null;
  }

  countLeftNode(node: Node | null): number {
    if (node == null) return 0;
    if (node.left == null || node.right == null) return 1;
    return this.countLeftNode(node.left) + this.countLeftNode(node.right);
  }

  sumOfAllNodes(node: Node | null): number {
    if (node == null) return 0;
    return (
      node.value +
      this.sumOfAllNodes(node.left) +
      this.sumOfAllNodes(node.right)
    );
  }
}

export function binarySearchTree() {
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(2);
  bst.insert(20);
  console.log(bst.height(bst.root));
}
