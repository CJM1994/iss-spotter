const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (error) {
      callback(null, error);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = new Error(`Status Code: ${response.statusCode} when fetching ip, received: ${body || '...'}`);
      callback(null, msg);
      return;
    }

    const IP = JSON.parse(body).ip;
    return callback(IP);

  });
};

module.exports = fetchMyIP;