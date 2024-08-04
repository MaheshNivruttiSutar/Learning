/**
 * Que.23 Program to convert First letter of a String in to Uppercase in javascript?
 *
 *
 */


function capitalizeFirstLetter(str) {
    if (str.length === 0) {
      return str; // Return the string as is if it's empty
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const inputString = "hello world";
  const result = capitalizeFirstLetter(inputString);
  console.log(result); // Output: "Hello world"
