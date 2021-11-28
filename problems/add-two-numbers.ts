export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  const result = new ListNode(0);

  let current = result;
  let currentL1 = l1;
  let currentL2 = l2;

  while (current) {
    current.val += (currentL1?.val || 0) + (currentL2?.val || 0);

    if (current.val > 9) {
      current.next = new ListNode(1);
      current.val %= 10;
    }

    if ((currentL1?.next || currentL2?.next) && !current.next) {
      current.next = new ListNode(0);
    }

    current = current.next;
    currentL1 = currentL1?.next || null;
    currentL2 = currentL2?.next || null;
  }

  return result;
};

export default addTwoNumbers;
