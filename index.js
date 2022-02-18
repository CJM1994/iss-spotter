const fetchISSTimesForMyLocation = require('./iss');

const printISSTimes = function () {



}

fetchISSTimesForMyLocation((data, error) => {
  if (error) {
    return console.log(error);
  }
  console.log(data);
});