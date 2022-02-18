const request = require('request');

const fetchMyIP = function (callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (error) {
      callback(null, error);
      return;
    };

    if (response.statusCode !== 200) {
      const msg = new Error(`Status Code: ${response.statusCode} when fetching ip, received: ${body || '...'}`);
      callback(null, msg);
      return;
    };

    const IP = JSON.parse(body).ip;
    return callback(IP);

  });
};

const fetchCoordsByIP = function (IP, callback) {

  request(`https://api.freegeoip.app/json/${IP}?apikey=a74512d0-906b-11ec-9ae3-8368081b37ef`, (error, response, body) => {

    if (error) {
      callback(null, error);
      return;
    };

    if (response.statusCode !== 200) {
      const msg = new Error(`Status Code: ${response.statusCode} when fetching coordinates, received: ${body || '...'}`);
      callback(null, msg);
      return;
    };

    const coords = {};
    coords.latitude = JSON.parse(body).latitude;
    coords.longitude = JSON.parse(body).longitude;

    callback(coords);

  });

};

const fetchISSFlyOverTimes = function (coords, callback) {

  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {

    if (error) {
      callback(null, error);
      return;
    };

    if (response.statusCode !== 200) {
      const msg = new Error(`Status Code: ${response.statusCode} when fetching coordinates, received: ${body || '...'}`);
      callback(null, msg);
      return;
    };

    const data = JSON.parse(body).response;
    callback(data, error);

  });

};

const fetchISSTimesForMyLocation = function (callback) {

  fetchMyIP((IP, error) => {
    if (error) {
      return callback(null, error);
    }
    fetchCoordsByIP(IP, (coords, error) => {
      if (error) {
        return callback(null, error);
      }
      fetchISSFlyOverTimes(coords, (data, error) => {
        if (error) {
          return callback(null, error);
        }
        callback(data, error);
      });
    });
  });
};

module.exports = fetchISSTimesForMyLocation;