//**** PROMISES ****//
/* Promises is for "eventual" completion of task. It is an object in JS.
It is a solution to callback hell.

NOTE: resolve & reject are callbacks provided by JS

*/

// const { promise } = require("selenium-webdriver");


//***** */
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve(123);
//     resolve("Success");
// });


//***** */
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a reject");
//     reject("Some error");
// });


// //**** */
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }
//  let promiseddd = getData(123);
//  console.log(promiseddd);





 /* A Javascript Promise object can be:
 * Pending : The result is undefined
 * Resolved : the result is a value (fulfilled)    resolved(result)
 * Rejected : the result is an error object        reject(error)

 NOTE: Promise has state(Pending, fulfilled) & some result(result for resolve & error for reject).



 PROMISES :
 .then() & .catch()

 promose.then((res) => {....})
 promise.catch((err) => {....})
 */

//  const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("Success");
//     });
//  }
//  let promise = getPromise();

//  promise.then(() => {
//     console.log("Promise fulfilled");
//  });

//  promise.catch((err) => {
//     console.log("rejected");
//  });




//****PROMISE CHAIN */
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
           resolve("success");
        }, 5000);
    });
}

getData(1)
        .then((res) => {
            return getData(2);
        })
        .then((res) => {
            return getData(3);
        })
        .then((res) => {
            return getData(4);
        })
        .then((res) => {
            console.log(res);
        })