'use strict'

require('dotenv').config();
const net = require('net')
const port = process.env.PORT || 3000;

const server = net.createServer();

server.listen(port, () => console.log(`Server up on ${port}`));


const socketPool = {};

server.on('connection', socket => {

  let id = `Socket-${Math.random()}`;

  socketPool[id] = socket;
  
  socket.on('data', buffer => dispatchEvent(buffer));

  socket.on('error', (e) => {console.error('SECKET ERROR', e)})
  socket.on('end', (e) => { delete socketPool[id]; });

})

server.on('error', (e) => {
  console.error('SERVER ERROR', e.message);
});




function dispatchEvent(buffer) {
  let message = buffer;

  broadcast(message);
}

function broadcast(message) {
  let payload = JSON.stringify(message);
  for(let socket in socketPool) {
    const socket = socketPool[socketId];
    console.log(socket);
    socket.write(payload);
  }
}