//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//You may assume that the array is non-empty and the majority element always exist in the array.

function majorityElement(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let map = new Map();

    for (let current of nums) {
        if (map.has(current)) {
            map.set(current, map.get(current) + 1);
        } else {
            map.set(current, 1);
        }

        if (map.get(current) > nums.length / 2) {
            return current;
        }
    }

    // No majority element exists
    return -1;
}

console.log(majorityElement([3, 2, 3]));       // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([1, 2, 3, 4, 2]));    // Output: -1 (no majority element)
console.log(majorityElement([2]));