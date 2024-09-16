// we are using circular queue because if we are using array to implement queue then we need to use
// unshift or shift which will take O(n) time complexity

class CircularQueue {
  private queue: any[];
  private first: number;
  private rear: number;
  private size: number;
  constructor(private queueLength: number) {
    this.queue = new Array(queueLength).fill(null);
    this.first = 0;
    this.rear = 0;
    this.size = 0;
  }

  enQueue(value: any) {
    if (this.size === this.queueLength) {
      console.error("Queue is full");
      return;
    }
    const index = this.first % this.queueLength;
    this.queue[index] = value;
    ++this.first;
    ++this.size;
  }

  deQueue() {
    if (this.size === 0) {
      console.error("Queue is empty");
      return;
    }
    const index = this.rear % this.queueLength;
    const value = this.queue[index];
    ++this.rear;
    --this.size;
    return value;
  }

  peek() {
    if (this.size === 0) {
      console.error("Queue is empty");
      return;
    }
    const index = this.rear % this.queueLength;
    return this.queue[index];
  }
}

export function Queue() {
  const circularQueue = new CircularQueue(3);
  circularQueue.enQueue(1);
  circularQueue.enQueue(2);
  circularQueue.enQueue(3);
  circularQueue.enQueue(4);
  console.log(circularQueue.deQueue());
  circularQueue.enQueue(13);
  circularQueue.enQueue(14);
  console.log(circularQueue.peek());
}
