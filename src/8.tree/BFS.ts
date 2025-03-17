/*
  BFS (breadth first search)
  1. it is level wise printing.

  where to use :-)
  - When answer is lies near to root node
  - when asked to search level wise
*/

import { DynamicQueue } from "../7.stack-queue/DyanamicQueue";
import { BinaryTree, Node } from "./BinaryTree";

class BFS extends BinaryTree {
  queue: DynamicQueue;
  constructor() {
    super();
    this.queue = new DynamicQueue();
  }

  // this level wise print is not optimized as we are doing too many tree traversals
  bfsPrint(node = this.root): void {
    const height = this.height();
    for (let i = 1; i <= height; i++) {
      this.printLevel(node, i);
    }
  }

  private printLevel(node: Node | null, level: number): void {
    if (node == null) return;
    if (level == 1) console.log(node.value);
    else if (level > 1) {
      this.printLevel(node.left, level - 1);
      this.printLevel(node.right, level - 1);
    }
  }

  // BFS WITH QUEUE
  bfsPrintWithQueue(node: Node | null | undefined): void {
    if (!node) return;
    console.log(node.value);
    if (node.left != null) this.queue.enQueue(node.left);
    if (node.right != null) this.queue.enQueue(node.right);
    this.bfsPrintWithQueue(this.queue.deQueue());
  }
}

export async function breadthFirstSearch() {
  const bfs = new BFS();
  await bfs.input();
  bfs.rl.close();
  bfs.bfsPrintWithQueue(bfs.root);
}
