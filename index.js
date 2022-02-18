// const fetchMyIP = require('./iss');
// const fetchCoordsByIP = require('./iss')
const fetchISSFlyOverTimes = require('./iss');

// Fetches IP Address from ipify.org
// fetchMyIP((IP, error) => {

//   if (error) {
//     console.log(error);
//     return;
//   } else console.log('Found User IP Address', IP);

// });

// fetchCoordsByIP("173.180.111.239", (coords, error) => {

//   if (error) {
//     console.log(error);
//     return;
//   } else console.log('Found User Coordinates', coords);

// });

fetchISSFlyOverTimes({ latitude: 49.2189, longitude: -122.9011 }, (data, error) => {

  if (error) {
    console.log(error);
    return;
  } else console.log(data);

});