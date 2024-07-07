//**** Some more array methods ****//
/* Map
Creates a new array with the results of some operation. The value it's callback returns are used to form new array

arr.map(callbackFnx( Value, index, array))
*/


let nums = [67, 52, 39];

// let newArr = nums.map((val) => {
//     return val;
// });

// console.log(newArr);



let newArr = nums.map((val) => {
    console.log(val * val);
});
