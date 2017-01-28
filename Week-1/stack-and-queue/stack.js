"use strict"

class Stack {
  constructor() {
    this.arr = [];
  }

  push(newData) {
    this.arr.push(newData);
    return this.arr;
  }

  pop() {
    if (this.arr.length < 10) {
      this.arr.pop();
      return this.arr;
    }
    else {
      console.log("Array is Full!");
    }
  }

  peek() {
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

let my_stack = new Stack();

console.log(`The stack is empty? ${my_stack.isEmpty()}`);

console.log(my_stack.push("Javascript"));
console.log(my_stack.push("is just so"));
console.log(my_stack.push("cool"));
console.log(my_stack.push(15));

console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());

console.log(`The stack is empty? ${my_stack.isEmpty()}`);
console.log(my_stack.pop());

/*
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);

console.log(square.area);
*/
