'use strict';
/*Vendor Module
Declare your store name (perhaps in a .env file, so that this module is re-usable)
Every 5 seconds, simulate a new customer order
Create a fake order, as an object:
storeName, orderId, customerName, address
Emit a ‘pickup’ event and attach the fake order as payload
HINT: Have some fun by using the faker library to make up phony information
Monitor the system for events …
Whenever the ‘delivered’ event occurs
Log “thank you” to the console
*/
const eventMgr = require('./events.js');
const storeName = '1-206-flowers';

function run() {
setInterval(() => {
  const payload = {store: '1-206-flowers',
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customer: 'Jamal Braun',
  address: 'Schmittfort, LA' };

  eventMgr.emit('pickup','pickup', payload);
}, 5000);
}

eventMgr.on('delivered', () => {
 console.log('VENDOR: Thank you for delivering ' + payload.orderID)
})
module.exports = run;