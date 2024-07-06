// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length);  //property
// console.log("typeof marks", typeof marks);

// //Array index
// console.log("marks[2]",marks[2])


// let heroes = ["ironman", "thor", "shaktiman", "spiderman"];
// console.log(heroes);
// console.log("typeof heroes", typeof heroes);


//**** Looping over an Array ****//
//Print all element of an array
let heroes = ["ironman", "thor", "shaktiman", "spiderman"];
// console.log(heroes);
// console.log("typeof heroes", typeof heroes);

// //For loop
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i])
// }


//For of
for(let el of heroes){
    console.log(el);
}