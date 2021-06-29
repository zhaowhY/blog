/**
 * @description 并查集
 * {@link https://leetcode-cn.com/problems/number-of-islands/}
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || !grid[0]) return 0;
  let result = 0;
  const xlen = grid.length;
  const ylen = grid[0].length;
  function dfs(x, y) {
    grid[x][y] = false;
    const xDir = [-1, 0, 1, 0];
    const yDir = [0, -1, 0, 1];
    for (let i = 0; i < 4; i++) {
      const curX = x + xDir[i];
      const curY = y + yDir[i];
      if (curX >= 0 && curX < xlen && curY >= 0 && curY < ylen && grid[curX][curY] === '1') {
        dfs(curX, curY);
      }
    }
  }

  for (let i = 0; i < xlen; i++) {
    for (let j = 0; j < ylen; j++) {
      if (grid[i][j] === '1') {
        result += 1;
        dfs(i, j);
      }
    }
  }

  return result;
};

console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]));

console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]));

