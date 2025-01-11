/*
Given a string, remove all the duplicate elements from a string
*/



function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

console.log(removeDuplicates("aabbccdd")); // Output: "abcd"
