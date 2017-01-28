function tic_tac_toe_board() {
  let xo_random = ["X", "O"]
  let emptyArr = [];
  let xCount = 0;
  let oCount= 0;

  for (let i = 0; i < 9; i++) {
    let tam = Math.floor(Math.random() * 2);
    emptyArr.push([xo_random[tam]]);
    if (xo_random[tam] == xo_random[0]) {
      xCount++;
    }
    else if (xo_random[tam] == xo_random[1]) {
      oCount++;
    }
  }
  console.log(`X: ${xCount}, O: ${oCount}`);
  if ((xCount == 5 || xCount == 4) && (oCount == 5 || oCount == 4)) {
    return emptyArr;
  }
  else {
    return tic_tac_toe_board();
  }
}
console.log(tic_tac_toe_board()) // => make a random tic tic board
