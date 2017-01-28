"use strict"

class Queue {
  constructor() {
    this.arr = [];
  }

  push(newData) {
    this.arr.unshift(newData);
    return this.arr;
  }

  pop() {
    if (this.arr.length < 10) {
      this.arr.shift();
      return this.arr;
    }
    else {
      console.log("Array is Full!");
    }
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[arr.length-1];
  }

  isEmpty() {
    if (this.arr.length === 0) {
      return `${this.arr.length} is true`;
    }
    else {
      return `${this.arr.length} is false`;
    }
  }

  isFull() {
    if (this.arr.length == 10) {
      console.log("Array is Full!");
    }
    else {
      console.log("You can push.");
    }
  }
}

let my_queue = new Queue();

console.log(`The queue is empty? ${my_queue.isEmpty()}`);

console.log(my_queue.push("Javascript"));
console.log(my_queue.push("is just so"));
console.log(my_queue.push("cool"));
console.log(my_queue.push(15));

console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());

console.log(`The queue is empty? ${my_queue.isEmpty()}`);
console.log(my_queue.pop());
