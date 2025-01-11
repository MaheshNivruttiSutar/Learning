//TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl
//and it returns a short URL such as http://tinyurl.com/4e9iAk.
//
//Design the encode and decode methods for the TinyURL service. There is no restriction on how your
//encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL
//and the tiny URL can be decoded to the original URL.


class TinyURL {
    constructor() {
        this.urlMap = new Map(); // Map to store the mapping between short keys and original URLs
        this.baseUrl = 'http://tinyurl.com/'; // Base URL for tiny URLs
        this.keyLength = 6; // Length of the short key
        this.alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Characters used in the key
        this.counter = 0; // Counter to generate unique keys
    }

    // Helper function to generate a unique short key
    generateKey() {
        let key = '';
        for (let i = 0; i < this.keyLength; i++) {
            key += this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length));
        }
        return key;
    }

    // Encode method
    encode(longUrl) {
        let key = this.generateKey();
        // Ensure the key is unique
        while (this.urlMap.has(key)) {
            key = this.generateKey();
        }
        this.urlMap.set(key, longUrl);
        return this.baseUrl + key;
    }

    // Decode method
    decode(shortUrl) {
        const key = shortUrl.replace(this.baseUrl, '');
        return this.urlMap.get(key) || '';
    }
}

// Example usage:
const tinyUrlService = new TinyURL();
const longUrl = 'https://leetcode.com/problems/design-tinyurl';
const shortUrl = tinyUrlService.encode(longUrl);
console.log('Short URL:', shortUrl); // Example output: 'http://tinyurl.com/4e9iAk'
console.log('Original URL:', tinyUrlService.decode(shortUrl)); // Should output the original long URL
