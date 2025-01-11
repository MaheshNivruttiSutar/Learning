/*
Write code to fetch the username, password from properties file:
In JavaScript, you can't directly access properties files like in Java.
However, assuming you have a .json or .env file, you can use the following approach.
*/


const fs = require('fs');

function getCredentials() {
    const data = fs.readFileSync('credentials.json');
    const credentials = JSON.parse(data);
    console.log(`Username: ${credentials.username}`);
    console.log(`Password: ${credentials.password}`);
}

getCredentials();
