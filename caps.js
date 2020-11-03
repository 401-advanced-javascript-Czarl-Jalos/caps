/*Main Hub Application
Manages the state of every package (ready for pickup, in transit, delivered, etc)
Logs every event to the console with a timestamp and the event payload
i.e. “EVENT {}”
EVENT { event: 'pickup',
  time: 2020-03-06T18:27:17.732Z,
  payload:
   { store: '1-206-flowers',
     orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
     customer: 'Jamal Braun',
     address: 'Schmittfort, LA' } }
DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0
EVENT { event: 'in-transit',
  time: 2020-03-06T18:27:18.738Z,
  payload:
   { store: '1-206-flowers',
     orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
     customer: 'Jamal Braun',
     address: 'Schmittfort, LA' } }
DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0
VENDOR: Thank you for delivering e3669048-7313-427b-b6cc-74010ca1f8f0
EVENT { event: 'delivered',
  time: 2020-03-06T18:27:20.736Z,
  payload:
   { store: '1-206-flowers',
     orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
     customer: 'Jamal Braun',
     address: 'Schmittfort, LA' } }
...*/


const eventMgr = require('./events.js');
const vendorRun = require('./vendor.js')

eventMgr.on('pickup', (payload) => logEvent('pickup', payload));
eventMgr.on('in-transit', (payload) => logEvent('in-transit', payload));
eventMgr.on('delivered', (payload) => logEvent('delivered', payload));
vendorRun();

function logEvent(eventType, payload) {

  const output = `
  EVENT { event: '${eventType}}',
  time: ${new Date()},
  payload: ${JSON.stringify(payload)}}`;
  console.log(output)
}
const fakePackage = {store: '1-206-flowers',
orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
customer: 'Jamal Braun',
address: 'Schmittfort, LA' }

eventMgr.emit('pickup', fakePackage);