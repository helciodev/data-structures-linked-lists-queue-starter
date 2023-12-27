// Node class is implemented for you, no need to look for bugs here!
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

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(1) it will be constant

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);
    // this.length++;
    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.length > 0) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    // Add node of val to tail of linked list
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(1)
  }

  removeFromHead() {
    // Remove node at head
    if (!this.length) return undefined;

    let currentHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return currentHead.value;
    // Write your hypothesis on the time complexity of this method here
    // time complexity O(1)
  }

  removeFromTail() {
    // Remove node at tail
    if (!this.length) return undefined;
    let currentTail = this.tail;
    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return currentTail.value;
    // Write your hypothesis on the time complexity of this method here
    // time complexity O(1)
  }

  peekAtHead() {
    // Return value of head node
    return this.length ? this.head.value : undefined;
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(1)
  }

  peekAtTail() {
    // Return value of tail node
    return this.length ? this.tail.value : undefined;
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(1)
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
