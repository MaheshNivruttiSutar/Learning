//**** forEach Loop in Arrays ****//
/* arr.forEach( callBackFunction )
CallbackFunction : HEre, It is a function to execute for each element in the array
*** A callback is a function passed as an argument to another function.
*/

// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function printVal(val) {
//     console.log("For Each Value", val);
// })


let arr1 = ["pune", "mumbai", "thane"];
// arr1.forEach(function printVal(str) {
//     console.log("For Each String", str);
//     console.log("For Each String in upperCase", str.toUpperCase());
//     console.log("For Each String in upperCase", str.toUpperCase(), arr1);
//     console.log("For Each String in upperCase", str.toUpperCase(), arr1);
// })


arr1.forEach(function printVal(str, idx, arr1) {
    console.log("For Each String in upperCase", str.toUpperCase(), idx, arr1);
})