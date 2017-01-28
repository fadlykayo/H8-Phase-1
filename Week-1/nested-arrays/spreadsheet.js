//write your code here

let table = [];

const addData = function (dataPar) {
  for (let i = 0; i < dataPar.length; i++) {
    table.push(dataPar[i]);
  }
  return table;
}

let data = ["1", "John Doe", "Director", [10, 10, 10, 10]];
console.log(addData(data));
