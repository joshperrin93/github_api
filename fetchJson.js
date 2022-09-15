// Create a function fetchJson (in fetchJson.js) which accepts one URL as argument, and one callback function.

// It should send an HTTP request using got to the URL, and calls the given function with the received response's data. This data should be parsed from JSON into a plain JavaScript object.

const got = require('got');

const fetchJson = (url, callback) => {
    got(url).then((response) => {
        const responseobj = JSON.parse(response.body)
        callback(responseobj)
    })
}

module.exports = fetchJson


// In node

// const fetchJson = require('./fetchJson');

fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response[0].title);
})

// This should log
// (after a few moments, depending on your network connection):
//
// [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   (...)
// ]