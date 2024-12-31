//TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl
//and it returns a short URL such as http://tinyurl.com/4e9iAk.
//
//Design the encode and decode methods for the TinyURL service. There is no restriction on how your
//encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL
//and the tiny URL can be decoded to the original URL.


class EncodeAndDecodeTinyURL {
    constructor() {
        this.map = new Map();
        this.characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.count = 1;
    }

    getKey() {
        let key = "";
        let tempCount = this.count;
        while (tempCount > 0) {
            key += this.characters.charAt(tempCount % this.characters.length);
            tempCount = Math.floor(tempCount / this.characters.length);
        }
        return key;
    }

    // Encodes a URL to a shortened URL.
    encode(longUrl) {
        const key = this.getKey();
        this.map.set(key, longUrl);
        this.count++;
        return "http://tinyurl.com/" + key;
    }

    // Decodes a shortened URL to its original URL.
    decode(shortUrl) {
        const key = shortUrl.replace("http://tinyurl.com/", "");
        return this.map.get(key);
    }
}

// Example usage:
const codec = new EncodeAndDecodeTinyURL();
const shortUrl = codec.encode("https://leetcode.com/problems/design-tinyurl");
console.log(shortUrl); // Output: http://tinyurl.com/0
console.log(codec.decode(shortUrl)); // Output: https://leetcode.com/problems/design-tinyurl



// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));