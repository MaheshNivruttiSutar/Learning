//**** ASYNC AWAIT ****//
/* Async function always returns a promise

await pauses the execution of it's surrounding async function until the promise is settled.
*/

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(2000);
//         }, 2000);
//     })
// }
// let test = api();



//**** */
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
           resolve("success");
        }, 5000);
    });
}

//Async-Await
async function getAllData() {
    console.log("getting data1.......");
    await getData(1);
    console.log("getting data2.......");
    await getData(2);
    console.log("getting data3.......");
    await getData(3);
    console.log("getting data4.......");
    await getData(4);
    console.log("getting data5.......");
    await getData(5);
}
let getAllData1 = getAllData();