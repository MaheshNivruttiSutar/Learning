// Implement a trie with insert, search, and startsWith methods.

// Note:
// You may assume that all inputs are consist of lowercase letters a-z.

// Your Trie object will be instantiated and called as such:
// Trie trie = new Trie();
// trie.insert("somestring");
// trie.search("key");




class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Inserts a word into the trie.
    insert(word) {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char);
        }

        current.isEndOfWord = true; // Mark the end of the word
    }

    // Returns if the word is in the trie.
    search(word) {
        let current = this.root;

        for (const char of word) {
            if (!current.children.has(char)) {
                return false; // Character not found
            }
            current = current.children.get(char);
        }

        return current.isEndOfWord; // Check if it's the end of a word
    }

    // Returns if there is any word in the trie
    // that starts with the given prefix.
    startsWith(prefix) {
        let current = this.root;

        for (const char of prefix) {
            if (!current.children.has(char)) {
                return false; // Prefix not found
            }
            current = current.children.get(char);
        }

        return true; // Prefix found
    }
}

// Example Usage
const trie = new Trie();
trie.insert("somestring");
console.log(trie.search("somestring")); // Output: true
console.log(trie.search("some")); // Output: false
console.log(trie.startsWith("some")); // Output: true
