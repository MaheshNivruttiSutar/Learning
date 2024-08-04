/**
 * Que.22 How to convert Kilometer(KM) into miles in javascript?
 *
 *
 */


//1 kilometer is approximately equal to 0.621371 miles


function kilometersToMiles(kilometers) {
    const conversionFactor = 0.621371;
    return kilometers * conversionFactor;
  }

  const kilometers = 10;
  const miles = kilometersToMiles(kilometers);
  console.log(`${kilometers} km is equal to ${miles.toFixed(2)} miles`);
