/* Create an array to store to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix",
a. Remove the first company from the array
b. Remove Uber & Add Ola in it's place
c. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

// //a. Remove the first company from the array
// let removeFirst = companies.shift();
// console.log("Removed item from array", removeFirst);
// console.log("Removed Bloomberg from array", companies);

// //b. Remove Uber & Add Ola in it's place
// let removeUber = companies.splice(2, 1, "Ola");
// console.log("Removed item from array", removeUber);
// console.log("Added Ola in array", companies);

//c. Add Amazon at the end
let addAmazon = companies.splice(6, 1, "Amazon");
console.log("Adding item in array", addAmazon);
console.log("Added Amazon in array", companies);