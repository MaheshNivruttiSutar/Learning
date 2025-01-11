class ValidPalindrome {
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            // Move left index to the next valid character
            while (left < right && !this.isLetterOrDigit(s[left])) {
                left++;
            }

            // Move right index to the previous valid character
            while (left < right && !this.isLetterOrDigit(s[right])) {
                right--;
            }

            // Compare characters ignoring case
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    // Helper function to check if a character is a letter or digit
    isLetterOrDigit(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    }
}

// Example Usage
const validPalindromeInstance = new ValidPalindrome();
console.log(validPalindromeInstance.isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(validPalindromeInstance.isPalindrome("race a car")); // Output: false
