// // //**** Strings ****//
// let str = "ApnaCollege";

// //String indicates
// console.log(str[8]); //e
// //String length
// console.log("str length", str.length);


// // //*** Template Literals in JS ****//
// /* A way to have embedded expressions in strings */
// let obj = {
//     item : "Pen",
//     price : 10
// }
// console.log("The cost of", obj.item, "is", obj.price, "rupees");



// //Template Literals
// let specialString = "This is a template literal";
// console.log(typeof specialString);

// let specialStr = `This is a template literal ${1+2+3}`;
// console.log("specialStr is", specialStr);



// // //**** String Methods in JS ****//
// // 1) str.toUpperCase()
// let str = "hallo"
// console.log("Upper case is",str.toUpperCase());

// // 2) str.toLowerCase()
// let str1 = "HALLOWW"
// console.log("Upper case is",str1.toLowerCase());

// // 3) str.trim() //Remove whitespaces
// let str2 = "   This     is     Mahesh    "
// console.log("Trimmed string is", str2.trim());

// // 4) str.slice(start,end?) //returns part of string
// let str6 = "ThisIsMAhesh";
// console.log("Slice of string is", str6.slice(1,5));

// // 5) str.concat(str2) //joins str2 with str1
// let str3 = "Apna";
// let str4 = " College";
// console.log("Concat of str3 and str4 is", str3.concat(str4));

// // 6) str.replace(searchVal, newVal)
// let str5 = "hello";
// console.log("Replaced string is",str5.replace("h","y"));

// 7) str.charAt(idx)
let str7 = "ApnaCollege";
console.log("CharAt",str7.charAt(3));