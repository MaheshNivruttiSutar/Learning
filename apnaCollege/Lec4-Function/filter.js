//**** Filter ****//
/* Creates a new array of elements that give true for a condition/filter.
Eg. All even elements.
*/
let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
return val > 3
});
console.log(evenArr);