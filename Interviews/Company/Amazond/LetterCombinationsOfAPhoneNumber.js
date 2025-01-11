// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.

// 2 - abc
// 3 - def
// 4 - ghi
// 5 - jkl
// 6 - mno
// 7 - pqrs
// 8 - tuv
// 9 - wxyz

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


function letterCombinations(digits) {
    if (!digits) return [];

    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    function backtrack(path, index) {
        // Base case: if the path length equals the digits length, add the path to result
        if (path.length === digits.length) {
            result.push(path);
            return;
        }

        // Get the letters for the current digit
        const letters = digitToLetters[digits[index]];

        // Recursive case: explore each letter
        for (const letter of letters) {
            backtrack(path + letter, index + 1);
        }
    }

    // Start the backtracking process
    backtrack('', 0);

    return result;
}

// Example usage
const input = "23";
console.log(letterCombinations(input));
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
