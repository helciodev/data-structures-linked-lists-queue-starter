// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    let newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return { head: this.head, length: this.length };
    // Write your hypothesis on the time complexity of this method here
    // The time complexity for this function would be O(1) because it will always be a constant time to add a new value to the head of this linked list.
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;

      this.length++;

      return { head: this.head, length: this.length };
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;
    return { head: this.head, length: this.length };
  }

  removeFromHead() {
    // Remove node at head
    let current;
    if (this.head) {
      current = this.head;
      this.head = this.head.next;
    }
    this.length--;
    return current;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    // Remove node at tail
    if (!this.head) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.length--;
    }
    let curr = this.head;
    let currentTail;
    while (curr) {
      if (!curr.next.next) {
        currentTail = curr.next;
        curr.next = null;
      }
      curr = curr.next;
    }
    if (this.length >= 1) this.length--;
    return currentTail;
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(n) because it has to iterate every element until if finds the second to last element
  }

  peekAtHead() {
    // Return value of head node
    if (this.head) return this.head.value;
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(1) because it just has to return the head value, there is no need to iterate through every element in the linked list
  }

  print() {
    // Print out the linked list
    if (!this.head) return;
    let current = this.head;

    while (current) {
      console.log(`${current.value}`);
      current = current.next;
    }
    console.log(null);
    // Write your hypothesis on the time complexity of this method here
    // Time complexity O(1) constant
  }
}

const ll = new SinglyLinkedList();
ll.addToTail("A");
ll.addToTail("B");
console.log(ll.length);
ll.removeFromTail();
console.log(ll.length);
ll.removeFromTail();
console.log(ll.length);

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
