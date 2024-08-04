/**
 * Que.20 How to find union of two arrays/set in javascript?
 *
 *
 */



// //Method 1
// //Using filter and includes
// function intersectionOfArrays(arr1, arr2) {
//     return arr1.filter(value => arr2.includes(value));
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const intersection = intersectionOfArrays(array1, array2);
// console.log('Intersection of arrays:', intersection);




// //Method 2
// //Using Set
// function intersectionOfArrays(arr1, arr2) {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     const intersection = [...set1].filter(value => set2.has(value));
//     return intersection;
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const intersection = intersectionOfArrays(array1, array2);
// console.log('Intersection of arrays:', intersection);



// ////Method 3
// //Intersection of Sets
// function intersectionOfSets(set1, set2) {
//     const intersection = new Set();
//     for (let item of set1) {
//         if (set2.has(item)) {
//             intersection.add(item);
//         }
//     }
//     return intersection;
// }

// const set1 = new Set([1, 2, 3, 4, 5]);
// const set2 = new Set([3, 4, 5, 6, 7]);
// const intersection = intersectionOfSets(set1, set2);
// console.log('Intersection of sets:', [...intersection]);



//Method 4
//Using concat and Set
function unionOfArrays(arr1, arr2) {
    const combined = arr1.concat(arr2);
    return [...new Set(combined)];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const union = unionOfArrays(array1, array2);
console.log('Union of arrays:', union);
