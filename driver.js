/*Drivers Module
Monitor the system for events …
On the ‘pickup’ event …
Wait 1 second
Log “DRIVER: picked up [ORDER_ID]” to the console.
Emit an ‘in-transit’ event with the payload you received
Wait 3 seconds
Log “delivered” to the console
Emit a ‘delivered’ event with the same payload*/

const events = require('./events.js');
const eventMgr = require('./events.js');

eventMgr.on('pickup', payload => {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit', payload);
  }, 1000);

  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderID}`);
    events.emit('delivered', payload);
  }, 3000);
})