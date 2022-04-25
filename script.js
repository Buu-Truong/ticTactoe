// The varible for the DOM
const cells = document.querySelectorAll('.cell');
const msg = document.querySelector('.msg');
let turn;
let winner;
//  Check row
function checkRow(c0, c1, c2) {
  const cText = [c0, c1, c2].map((cell) => cell.textContent);
  return [cText[0], cText[1], cText[2]].every((cText) => cText === cText[0]);
}
// Check for winner.
function checkForWin() {
  const row0 = checkRow(cells[0], cells[1], cells[2]);
  const row1 = checkRow(cells[3], cells[4], cells[5]);
  const row2 = checkRow(cells[6], cells[7], cells[8]);
  if (row0 || row1 || row2) winner = turn;
}
// Y or X turn
function setTurn(xo) {
  turn = !turn || turn === 'y' ? 'x' : 'y';
  msg.textContent = `${turn} turn`;
}
// Y or X wins message prompt
cells.forEach((cell) => cell.addEventListener('click', () => {
  if (!winner && !cell.textContent) {
    cell.textContent = turn === 'x' ? 'X' : 'Y';
    cell.style.backgroundColor = 'lightgray';
    checkForWin();
    if (winner) {
      msg.classList.add('winner');
      msg.textContent = `${winner} wins!`
    } else {
      setTurn();
    }
  }
}));
setTurn();
