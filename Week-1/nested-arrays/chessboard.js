//write your code here

const chessboard = function () {
  let chessPieceRow1 = ["Rook", "Horse", "Bishop", "King", "Queen", "Bishop", "Horse", "Rook"];
  let chessPieceRow2 = ["Pawn"];
  let emptyRow = [];
  // "Black " + chessPieceRow1[i]
  let emptyArr = [];
  for (let i = 0; i < chessPieceRow1.length; i++) {
    emptyArr.push([]);
  }
  for (let i = 0; i < chessPieceRow1.length; i++) {
    emptyArr[0][i] = "Black " + chessPieceRow1[i];
    emptyArr[1][i] = "Black " + chessPieceRow2;
    emptyArr[2][i] = emptyRow;
    emptyArr[3][i] = emptyRow;
    emptyArr[4][i] = emptyRow;
    emptyArr[5][i] = emptyRow;
    emptyArr[6][i] = "White " + chessPieceRow2;
    emptyArr[7][i] = "White " + chessPieceRow1[i];
  }
  return emptyArr;
}

console.table(chessboard());
