class LinkNode {
  value: any;
  next: LinkNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  private head: LinkNode | null;
  private tail: LinkNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertForFirst(value: any) {
    const node = new LinkNode(value);
    node.next = this.head;
    this.head = node;
    ++this.size;
    if (!this.tail) {
      this.tail = this.head;
    }
  }

  insertForLast(value: any) {
    const node = new LinkNode(value);
    if (!this.tail) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    ++this.size;
  }

  print() {
    let tempNode = this.head;
    while (tempNode !== null) {
      console.log(tempNode.value);
      tempNode = tempNode.next;
    }
  }

  insertRecu(index: number, value: any) {
    const tempHead = this.head;
    this.head = this.insertRecuPrivate(index, value, 0, tempHead);
  }

  insertRecuPrivate(
    index: number,
    value: any,
    currIndex: number,
    currNode: LinkNode | null
  ) {
    if (index === currIndex) {
      const node = new LinkNode(value);
      node.next = currNode;
      return node;
    } else if (currNode == null) {
      console.error("Invailed index", index);
      return currNode;
    }
    const node = this.insertRecuPrivate(
      index,
      value,
      currIndex + 1,
      currNode.next
    );
    currNode.next = node;
    return currNode;
  }
}

const ll = new LinkedList();
ll.insertForFirst(10);
ll.insertForLast(11);
console.log(ll.size);
ll.print();
