class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var mergeTwoLists = function (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let ansList = null;
  let currNode = null;
  if (list1 == null && list2 == null) return list1;
  if (list1 == null && list2 !== null) return list2;
  if (list1 !== null && list2 == null) return list1;

  if (list1.val < list2.val) {
    ansList = list1;
    currNode = list1;
    list1 = list1.next;
  } else {
    ansList = list2;
    currNode = list2;
    list2 = list2.next;
  }

  while (list1 !== null && list2 !== null) {
    let newNode = new ListNode();
    if (list1.val < list2.val) {
      newNode.val = list1.val;
      list1 = list1.next;
      currNode.next = newNode;
      currNode = newNode;
    } else {
      newNode.val = list2.val;
      list2 = list2.next;
      currNode.next = newNode;
      currNode = newNode;
    }
  }

  if (list1 !== null) {
    currNode.next = list1;
  }
  if (list2 !== null) {
    currNode.next = list2;
  }

  return ansList;
};
