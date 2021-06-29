/** todo
 * {@link https://leetcode-cn.com/problems/word-search/}
 */


/** 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!word) return true;
  if (!board || !board[0]) return false;
  const xlen = board.length;
  const ylen = board[0].length;
  const visit = new Array(xlen);
  for (let i = 0; i < xlen; i++) {
    visit[i] = new Array(ylen).fill(false);
  }



  function dfs(x, y, word) {
    if (!word) return true;

    const xDir = [-1, 0, 1, 0];
    const yDir = [0, 1, 0, -1];
    visit[x][y] = true;
    for (let i = 0; i < 4; i++) {
      const curX = x + xDir[i];
      const curY = y + yDir[i];
      if (curX < 0 || curY < 0 || curX > xlen - 1 || curY > ylen - 1) continue;

      if (!visit[curX][curY] && board[curX][curY] === word[0]) {
        const bool = dfs(x + xDir[i], y + yDir[i], word.slice(1));
        if (bool) return bool;
      }
    }
    visit[x][y] = false;
    return false;
  }

  for (let i = 0; i < xlen; i++) {
    for (let j = 0; j < ylen; j++) {
      if (board[i][j] === word[0]) {
        const result = dfs(i, j, word.slice(1));
        if (result) return true;
      }
    }
  }
  return false;
};


console.log(exist([
  ["A", "B", "E"],
  ["B", "C", "D"]],
  'ABCDEB')); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED')); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'SEE')); // true
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCB')); // false
console.log(exist([
  ["a", "a", "b", "a", "a", "b"],
  ["b", "a", "b", "a", "b", "b"],
  ["b", "a", "b", "b", "b", "b"],
  ["a", "a", "b", "a", "b", "a"],
  ["b", "b", "a", "a", "a", "b"],
  ["b", "b", "b", "a", "b", "a"]], 'aaaababab')); // true

// "A", "B", "C", "E";
// "S", "F", "C", "S";
// "A", "D", "E", "E";
