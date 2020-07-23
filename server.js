'use strict';

// 1 - Declaring a variable to use express library
const express = require('express');
// require -> calling the library

// 2 - initialize the server
const server = express();

// 3 - declare a port
const PORT = process.env.PORT || 3000;


server.listen(PORT,()=>{
  console.log('i am listeneing to port ', PORT);
});

server.use(express.static('./public'));

// http:/localhost:3000/test

server.get('/test',(request,response) => {
  response.send('You are awesome!');
});

// http:/localhost:3000/data

server.get('/data', (reauest, response) =>{
  let cars = [
    {
      name:'Ferrari'
    },
    {
      name:'Ford'
    }
  ];
  response.json(cars);
});
