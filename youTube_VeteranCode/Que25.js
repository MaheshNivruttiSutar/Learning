/**
 * Que.25 Program to print star and number patterns Right Triangle, Pyrmaid and Diamond shape in javascript?
 *
 *
 */



// //1. Right Triangle Pattern
// //Star Pattern
// function printRightTriangleStars(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('*'.repeat(i));
//     }
// }

// const rows = 5;
// printRightTriangleStars(rows);




// //Number Pattern
// function printRightTriangleNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(Array.from({ length: i }, (_, index) => index + 1).join(' '));
//     }
// }

// const rows = 5;
// printRightTriangleNumbers(rows);



// //2. Pyramid Pattern
// //Star Pattern
// function printPyramidStars(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
// }

// const rows = 5;
// printPyramidStars(rows);



// //Number Pattern
// function printPyramidNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         let line = ' '.repeat(n - i);
//         line += Array.from({ length: i }, (_, index) => index + 1).join(' ');
//         console.log(line);
//     }
// }

// const rows = 5;
// printPyramidNumbers(rows);



// //3. Diamond Pattern
// //Star Pattern
// function printDiamondStars(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
// }

// const rows = 5;
// printDiamondStars(rows);




// //Number Pattern
// function printDiamondNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         let line = ' '.repeat(n - i);
//         line += Array.from({ length: i }, (_, index) => index + 1).join(' ');
//         console.log(line);
//     }
//     for (let i = n - 1; i >= 1; i--) {
//         let line = ' '.repeat(n - i);
//         line += Array.from({ length: i }, (_, index) => index + 1).join(' ');
//         console.log(line);
//     }
// }

// const rows = 5;
// printDiamondNumbers(rows);

