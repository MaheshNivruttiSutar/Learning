//Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules. (http://sudoku.com.au/TheRules.aspx)
//The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
//A partially filled sudoku which is valid.

//Note:
//A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

function isValidSudoku(board) {
    // Initialize sets for rows, columns, and sub-grids
    const rows = Array.from({ length: 9 }, () => new Set());
    const columns = Array.from({ length: 9 }, () => new Set());
    const subGrids = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue; // Skip empty cells

            // Check for valid number
            if (num < '1' || num > '9') return false;

            // Determine which sub-grid we are in
            const subGridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Check for duplicates in the current row, column, and sub-grid
            if (rows[i].has(num) || columns[j].has(num) || subGrids[subGridIndex].has(num)) {
                return false;
            }

            // Add the number to the respective row, column, and sub-grid
            rows[i].add(num);
            columns[j].add(num);
            subGrids[subGridIndex].add(num);
        }
    }

    return true;
}

// Example usage
const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".",".",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4",".",".",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board)); // Output: true
