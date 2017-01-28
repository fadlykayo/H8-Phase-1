"use strict";

export class Calculator {
  //write your code here
  constructor(num1 = 0) {
    this.result = num1;
  }

  tambah(num2) {
    this.result += num2;
    return this;
  }

  kurang(num3) {
    this.result -= num3;
    return this;
  }

  kali(num4) {
    this.result *= num4;
    return this;
  }

  bagi(num7) {
    this.result /= num7;
    return this;
  }

  pangkat(num5) {
    this.result = Math.pow(this.result, num5);
    return this;
  }

  akar() {
    this.result = Math.sqrt(this.result);
    return this;
  }

  lingkaran() {
    this.result = Math.pow(this.result, 2) * 3.14;
    return this;
  }

  hasil() {
    console.log(`Hasil: ${this.result}`);
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
