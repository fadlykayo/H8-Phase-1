"use strict";

/*
sudah OK. sedikit feedback kalo mau mempersingkat lagi proses nya, itu number nya dijadikan string saja.. kemudian waktu di kalikan (var tam) baru di convert lagi jadi numbber.

contoh penggalan code nya :
let simple_recursive = (number) => {
let string = number.toString()
if (string.length > 1) {
let result = 1
for (let i = 0; i < string.length; i++) {
result *= Number(string.charAt(i))
}
return simple_recursive(result)
} else {
return number
}
}
*/

// release 0
let prime_factors = (angka) => {
  // write your code here
  let div = [2];
  let res = [];
  for (let i = 3; i <= angka; i+=2) {
    div.push(i);
  }
  // console.log("div: " + div);
  for (let j = 0; j < div.length; j++) {
    if (div[j] < angka) {
      while (angka % div[j] == 0) {
        res.push(div[j]);
        angka = angka / div[j];
      }
    }
    else if (div[j] == angka) {
      res.push(angka);
    }
  }


  return "result: " + res;
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number, hasil = []) => {
  // write your code here
  hasil = number.toString().split("");
  let string = number.toString().length;
  let tam = 1;
  if (string == 1) {
    return number;
  }
  else {
    for (let i = 0; i < hasil.length; i++) {
      tam *= hasil[i];
      number = tam;
    }
    return simple_recursive(number, hasil);
  }
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
