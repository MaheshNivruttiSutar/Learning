// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// 11110
// 11010
// 11000
// 00000
// Answer: 1

// Example 2:

// 11000
// 11000
// 00100
// 00011
// Answer: 3


//Method 1
//DFS Approach
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;
        grid[r][c] = '0'; // Mark as visited
        // Explore neighbors
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    };

    let islandCount = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                dfs(r, c);
                islandCount++;
            }
        }
    }
    return islandCount;
}

// Example usage
const grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];
console.log(numIslands(grid1)); // Output: 1

const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];
console.log(numIslands(grid2)); // Output: 3





// //Method 2
// //BFS Approach
// function numIslands(grid) {
//     if (!grid || grid.length === 0) return 0;

//     const rows = grid.length;
//     const cols = grid[0].length;

//     const bfs = (r, c) => {
//         const queue = [[r, c]];
//         grid[r][c] = '0'; // Mark as visited
//         while (queue.length > 0) {
//             const [curR, curC] = queue.shift();
//             // Explore neighbors
//             for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
//                 const newR = curR + dr;
//                 const newC = curC + dc;
//                 if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && grid[newR][newC] === '1') {
//                     grid[newR][newC] = '0'; // Mark as visited
//                     queue.push([newR, newC]);
//                 }
//             }
//         }
//     };

//     let islandCount = 0;
//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < cols; c++) {
//             if (grid[r][c] === '1') {
//                 bfs(r, c);
//                 islandCount++;
//             }
//         }
//     }
//     return islandCount;
// }

// // Example usage
// const grid1 = [
//     ['1', '1', '1', '1', '0'],
//     ['1', '1', '0', '1', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '0', '0', '0']
// ];
// console.log(numIslands(grid1)); // Output: 1

// const grid2 = [
//     ['1', '1', '0', '0', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '1', '0', '0'],
//     ['0', '0', '0', '1', '1']
// ];
// console.log(numIslands(grid2)); // Output: 3
