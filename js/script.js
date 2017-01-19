var board = [
  //left
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0], //top
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
  //right
];
// For convenience, the board is rotated so that columns are horizontal and
// rows are vertical. This makes it easier to check where items are placed

// TODO: Returns what position a chip should be placed at
function getPosition(row) {

}

// Returns true if a row is full
// TODO:REDUNDANT
function isFull(row) {
  if (row < 0 || row > 6) {
    return true;
  }
  else {
    for (i = 0; i < 6; i++) {
      if (board[i] == 0) {
        return false;
      }
    }
  }
  return true;
}

//TODO: changes value of the board where chip is placed
function add(player, row) {
  if (player < 0 || player > 1) {
    return;
  }
}
