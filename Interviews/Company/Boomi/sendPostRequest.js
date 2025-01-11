/*
Passing JSON Body in API Framework and Validating Response (JavaScript)
In API testing with JavaScript, you can use libraries like Axios or SuperTest to send JSON data and validate responses.

Here’s an example using Axios to send a JSON body in a POST request:
*/


const axios = require('axios');

async function sendPostRequest() {
    const jsonBody = { name: 'John', age: 30 };

    try {
        const response = await axios.post('http://api.example.com/user', jsonBody, {
            headers: { 'Content-Type': 'application/json' }
        });

        // Validate status code
        if (response.status === 200) {
            console.log('Success:', response.data);
        } else {
            console.log('Error:', response.status);
        }
    } catch (error) {
        console.log('Error in request:', error.message);
    }
}

sendPostRequest();








// //Alternatively, with SuperTest:
// const request = require('supertest');

// async function sendPostRequest() {
//     const jsonBody = { name: 'John', age: 30 };

//     request('http://api.example.com')
//         .post('/user')
//         .send(jsonBody)
//         .set('Content-Type', 'application/json')
//         .expect(200)
//         .then(response => {
//             console.log('Success:', response.body);
//         })
//         .catch(error => {
//             console.log('API Test Failed:', error);
//         });
// }

// sendPostRequest();
