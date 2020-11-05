'use strict';

const net = require('net');

const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

cliet.connect(port, host, () => {});

let name = '';
const message = [];

client.on('data', function(data) {
  let event = JSON.parse(data);
  console.log(event);
  
})