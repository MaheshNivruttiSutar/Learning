/*
Program to remove duplicate elements from an ArrayList in JavaScript:
*/
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let arr = ["A", "B", "A", "C", "B"];
console.log(removeDuplicates(arr)); // Output: ["A", "B", "C"]




/*
Explanation: By converting the array to a Set, we automatically remove any duplicates,
as sets can only contain unique values. We then spread the set back into an array using [...].
*/