"use strict"

// masih bugs untuk index setelah 0

// class Dictionary {
//   // Your code here to receive user input & sort the array
//
// }

var arr = [], arr2 = [];
var res = [];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var tam = [], tam2 = 30;

const readline = require('readline');

const rl = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

// your code here to initialize the program and take user input
rl.setPrompt('Type a word: ');
rl.prompt()
rl.on("line", (answer) => {
  if (answer.toLowerCase() == "exit") {
    rl.close();
  }
  else if (answer == "") {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < alphabet.length; j++) {
        if (arr[i][0].toLowerCase() == alphabet[j]) {
          tam.push(alphabet.indexOf(alphabet[j]));
        }
      }
    }
    console.log(arr);
    var len = tam.length;
    var copytam = tam.slice("");
    while(len--) {
      tam2 = 30;
      for (var k = 0; k < tam.length; k++) {
        if (tam[k] < tam2) {
          tam2 = tam[k];
        }

      }
      arr2.push(arr[copytam.indexOf(tam2)]);
      tam.splice(tam.indexOf(tam2), 1);
    }
    res = arr2.join("\n");
    console.log("\nCongratulations! Your dictionary has " + arr.length + " words:\n" + res);
  }
  else {
    console.log(answer);
    arr.push(answer);
    rl.setPrompt('Type another word (or press enter to finish): ');
    rl.prompt();
    if (answer.toLowerCase() == "exit") {
      rl.close();
    }
  }
});
