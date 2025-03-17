import readline, { Interface } from "node:readline";

export class Node {
  value: any;
  left: Node | null;
  right: Node | null;
  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  root: Node | null;
  rl: Interface;
  constructor() {
    this.root = null;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  private askQuestion(query: string) {
    return new Promise((resolve) => {
      this.rl.question(query, (answer) => {
        resolve(answer);
      });
    });
  }

  async input(node?: Node | null) {
    try {
      if (!node) {
        const value: any = await this.askQuestion(
          "Please enter root node value "
        );
        node = new Node(value);
        this.root = node;
      }
      const left = await this.askQuestion(
        `Do you want to enter left node for value, type y or n of ${node.value} `
      );
      if (left == "y") {
        const value = await this.askQuestion(
          `Please enter left node value of ${node.value} `
        );
        const leftNode = new Node(value);
        node.left = leftNode;
        await this.input(leftNode);
      }
      const right = await this.askQuestion(
        `Do you want to enter right node for value, type y or n of ${node.value} `
      );
      if (right == "y") {
        const value = await this.askQuestion(
          `Please enter right node value of ${node.value} `
        );
        const rightNode = new Node(value);
        node.right = rightNode;
        await this.input(rightNode);
      }
    } catch (error) {
      console.log(error);
    }
  }

  print(node: Node | null): void {
    if (node) {
      console.log(node.value);
      this.print(node.left);
      this.print(node.right);
    }
  }

  height(node = this.root): number {
    if (node == null) return 0;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight + 1, rightHeight + 1);
  }
}

export async function treeImplementation() {
  const bTree = new BinaryTree();
  await bTree.input();
  bTree.rl.close();
  bTree.print(bTree.root);
}
