const describe = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let numIslands = 0;

  // Helper function to perform DFS
  function dfs(grid, i, j) {
    // If the cell is out of bounds or is water, return
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
      return;
    }

    // Mark the cell as visited by setting it to 'W'
    grid[i][j] = 'W';

    // Recursively visit all adjacent cells (up, down, left, right)
    dfs(grid, i - 1, j); // up
    dfs(grid, i + 1, j); // down
    dfs(grid, i, j - 1); // left
    dfs(grid, i, j + 1); // right
  }

  // Iterate through each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // If a land cell is found, it's the start of a new island
      if (grid[i][j] === 'L') {
        numIslands++;
        dfs(grid, i, j);
      }
    }
  }

  return numIslands;
};

module.exports = describe;
