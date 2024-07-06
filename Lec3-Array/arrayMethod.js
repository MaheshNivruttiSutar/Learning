//**** Array Methods ***//
// //Push(): add to end
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// // foodItems.push("chips", "burger", "paneer");
// // console.log(foodItems);

// //Pop():delete from end and return
// console.log(foodItems);
// foodItems.pop();
// console.log(foodItems);

// //toString():converts array to string
// let marks = [97, 86, 54, 36];
// let marksString = marks.toString()
// console.log(marks);
// console.log(marksString);

// //Concat();joins multiple arrays & returns result
// let marvelHeroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superman","batman"];
// // let heroes = marvelHeroes.concat(dcHeroes);
// // console.log("heroes",heroes);

// //We can combine multiple array as well
// let indianHeroes = ["Krish","Bahubali"];
// let allHeroes = marvelHeroes.concat(indianHeroes, dcHeroes);
// console.log("All Heroes",allHeroes);


// //unshift();add to start
// let marvelHeroes = ["thor","spiderman","ironman"];
// let val = marvelHeroes.unshift("hulk");
// console.log("added",val);
// console.log("New array After adding", marvelHeroes);


// //shift();delete from start & return
// let marvelHeroes = ["thor","spiderman","ironman"];
// let val = marvelHeroes.shift();
// console.log("deleted",val);
// console.log("New array After deleting", marvelHeroes);

// //slice();returns a piece of the array
// // slice(startIdx, endIdx)
// let marvelHeroes = ["thor","spiderman","ironman", "antman","Dr. strange","hulk"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3));

// //splice();change original array (add, remove, replace)
// //splice(startIdx, delCount, newEl)
// let arr = [1,2,3,4,5,6,7,8,9];
// let spl = arr.splice(2,2,101,102)
// console.log(spl);
// let updSpl = arr.splice(2,2,101,102)
// console.log(updSpl);
// console.log(arr);
