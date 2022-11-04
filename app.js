console.log('hello from node app');


// const http = require('http');

// var app = http.createServer


var passenger = {
    name: 'Passenger 1',
    email: 'passenger1@gmail.com',
    age: 45,
    phone: [12345, 123456]
};

var date = JSON.stringify(passenger);
console.log(date);

