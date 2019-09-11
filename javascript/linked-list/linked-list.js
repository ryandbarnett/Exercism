//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.list = [];
  }

  push(n) {
    return this.list.push(n);
  }

  pop() {
    return this.list.pop();
  }

  shift() {
    return this.list.shift();
  }

  unshift(n) {
    this.list.unshift(n);
  }

  delete(n) {
    const result = this.list.indexOf(n);
    if (result === -1) return;
    this.list.splice(result, 1);
  }

  count() {
    return this.list.length;
  }
}
