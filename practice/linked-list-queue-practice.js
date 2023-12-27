// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    this.length++;
    return this.head;
    // time complexity O(n)
  }

  listLength() {
    // Returns the length of the list
    // O(n)
    // let count = 0;

    // let current = this.head;

    // while (current) {
    //   count++;
    //   current = current.next;
    // }
    // return count;

    // Implement in O(n) and in O(1) time complexity
    // O(1)
    return this.length;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.value;
      current = current.next;
    }

    return sum;
    // Write your hypothesis on the time complexity of this method here
    // time complexity O(n)
  }

  averageValue() {
    return this.sumOfNodes() / this.listLength();
    // Returns the average value of all the nodes
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(n)
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    if (n === 0) return this.head;
    let current = this.head;
    let i = 0;

    while (current) {
      if (i === n) {
        return current;
      }
      current = current.next;
      i++;
    }
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(n)
  }

  findMid() {
    // Returns the middle node

    let mid = Math.round(this.listLength() / 2) - 1;
    let middleNode = this.findNthNode(mid);
    return middleNode;
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
    // time complexity O(n)
  }

  reverse() {
    // Returns a new reversed version of the linked list
    let current = this.head;
    let newHead = null;

    while (current.next) {
      let next = current.next;
      let nextAfterNext = current.next.next;

      if (!newHead) {
        current.next = nextAfterNext;
        newHead = next;
        newHead.next = current;
      } else {
        next.next = newHead;
        current.next = nextAfterNext;
        newHead = next;
      }
    }

    return new SinglyLinkedList(newHead);
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(n)
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let current = this.head;
    let newHead = null;

    while (current.next) {
      let next = current.next;
      let nextAfterNext = current.next.next;

      if (!newHead) {
        current.next = nextAfterNext;
        newHead = next;
        newHead.next = current;
      } else {
        next.next = newHead;
        current.next = nextAfterNext;
        newHead = next;
      }
    }

    this.head = newHead;
    // Write your hypothesis on the time complexity of this method here
    // Run in O(n)
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    if (!this.head) return null;

    const halfLength =
      this.length % 2 === 0
        ? Math.floor(this.length / 2) - 1
        : Math.floor(this.length / 2);
    let current = this.head;
    let i = 0;
    while (i < halfLength) {
      current = current.next;
      i++;
    }

    return current;
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list
    let current = this.tail;
    const reversed = new DoublyLinkedList();
    let i = this.length;
    while (i >= 1) {
      reversed.addToTail(current.value);

      current = current.prev;
      i--;
    }

    return reversed;
    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let current = this.head;
    let newHead = null;

    while (current.next) {
      let next = current.next;
      let nextAfterNext = current.next.next;

      if (!newHead) {
        current.next = nextAfterNext;
        newHead = next;
        newHead.next = current;
      } else {
        next.next = newHead;
        current.next = nextAfterNext;
        newHead = next;
      }
    }

    this.head = newHead;
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
