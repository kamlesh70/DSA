export class DynamicQueue {
  private queue: Record<number, any>;
  private front: number;
  private rear: number;
  private size: number;
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.queue = {};
  }

  enQueue(value: any) {
    this.queue[this.front] = value;
    ++this.front;
    ++this.size;
  }

  deQueue() {
    if (this.size === 0) {
      return;
    }

    const value = this.queue[this.rear];
    ++this.rear;
    --this.size;
    return value;
  }
}
