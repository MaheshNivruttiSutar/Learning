//Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules. (http://sudoku.com.au/TheRules.aspx)
//The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
//A partially filled sudoku which is valid.

//Note:
//A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.



class ValidSudoku {
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            const rows = new Set();
            const columns = new Set();
            const box = new Set();

            for (let j = 0; j < board[0].length; j++) {
                // Check the current row
                if (board[i][j] !== '.' && !rows.add(board[i][j])) {
                    return false; // Duplicate in the row
                }

                // Check the current column
                if (board[j][i] !== '.' && !columns.add(board[j][i])) {
                    return false; // Duplicate in the column
                }

                // Check the current 3x3 box
                const rowIndex = Math.floor(i / 3) * 3;
                const columnIndex = Math.floor(i % 3) * 3;
                const currentBoxValue = board[rowIndex + Math.floor(j / 3)][columnIndex + (j % 3)];
                if (currentBoxValue !== '.' && !box.add(currentBoxValue)) {
                    return false; // Duplicate in the box
                }
            }
        }
        return true; // No duplicates found
    }
}

// Example Usage
const validSudokuInstance = new ValidSudoku();
const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(validSudokuInstance.isValidSudoku(board)); // Output: true
