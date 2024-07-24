//**** Callbacks ****//
/* A callback is a function passed as an argument to another function. */

//Simple program
// function sum(a, b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(11, 22, sum);







//**** Callback Hell ****//
/* Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)

This style of programming becomes difficult to understand & manage
*/

//**** */
// //Program 1:
// for (let i=0; i < 5; i++) {
//     let str = "";
//     for (let j=0; j < 5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }

//**** */
// //Program 2:
// function getData(dataId) {
//     //2 sec
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// }

// getData(2);
// getData(3);

//**** */
//Program 3:
// function getData(dataId, getNextData) {
//     //2 sec
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// console.log("Processing 1");
// getData(1, () => {
//     // console.log("Processing 2");
//     getData(2);
// });


//**** */
//Program 4:
function getData(dataId, getNextData) {
    //2 sec
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     })
// });

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 getData(5);
//             });
//         });
//     })
// });


getData(1, () => {
    console.log("getting data2 .......");
    getData(2, () => {
        console.log("getting data3 .......");
        getData(3, () => {
            console.log("getting data4 .......");
            getData(4, () => {
                console.log("getting data5 .......");
                getData(5);
            });
        });
    });
});