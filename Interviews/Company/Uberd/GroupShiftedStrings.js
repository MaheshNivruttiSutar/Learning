// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

// "abc" -> "bcd" -> ... -> "xyz"
// Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

// For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
// A solution is:

// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]


class GroupShiftedStrings {
    groupStrings(strings) {
        const result = [];
        const map = new Map();

        for (let s of strings) {
            const offset = s.charCodeAt(0) - 'a'.charCodeAt(0);
            let key = '';

            for (let i = 0; i < s.length; i++) {
                let current = String.fromCharCode(s.charCodeAt(i) - offset);

                if (current < 'a') {
                    current = String.fromCharCode(current.charCodeAt(0) + 26);
                }

                key += current;
            }

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(s);
        }

        for (let key of map.keys()) {
            const list = map.get(key);
            list.sort();
            result.push(list);
        }

        return result;
    }
}

// Example usage:
const groupShiftedStrings = new GroupShiftedStrings();
const result = groupShiftedStrings.groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]);
console.log(result);
// Output:
// [
//   ["abc", "bcd", "xyz"],
//   ["az", "ba"],
//   ["acef"],
//   ["a", "z"]
// ]